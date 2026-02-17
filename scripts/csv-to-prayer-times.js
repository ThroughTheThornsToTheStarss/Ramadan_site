#!/usr/bin/env node
/**
 * Конвертирует CSV с расписанием намазов в prayer-times.json.
 * Раз в месяц: сохраняете таблицу в CSV, запускаете скрипт — сайт показывает нужный день сам.
 *
 * Форматы CSV:
 * 1) С полной датой: date,fajr,dhuhr,asr,maghrib,isha
 *    или: Дата,Фаджр,Зухр,Аср,Магриб,Иша
 * 2) Только день месяца: day,fajr,dhuhr,asr,maghrib,isha + опции --month=MM --year=YYYY
 *
 * Пример (день + месяц/год):
 *   node scripts/csv-to-prayer-times.js --month=2 --year=2026 february.csv
 * Пример (даты в CSV):
 *   node scripts/csv-to-prayer-times.js schedule.csv
 * Объединить с существующим расписанием:
 *   node scripts/csv-to-prayer-times.js --merge new-days.csv
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_OUTPUT = path.join(__dirname, "..", "public", "data", "prayer-times.json");

const COL_ALIASES = {
  date: ["date", "дата", "дата"],
  day: ["day", "день", "day"],
  fajr: ["fajr", "фаджр", "fajr"],
  dhuhr: ["dhuhr", "зухр", "dhuhr"],
  asr: ["asr", "аср", "asr"],
  maghrib: ["maghrib", "магриб", "maghrib"],
  isha: ["isha", "иша", "isha"],
};

function normalizeHeader(h) {
  if (typeof h !== "string") return "";
  return h.trim().toLowerCase().replace(/\s+/g, " ");
}

function findColumnIndex(headers, aliases) {
  return headers.findIndex((h) => {
    const n = normalizeHeader(h);
    const nClean = n.replace(/[^\wа-яё]/gi, "");
    return aliases.some((a) => {
      const aNorm = String(a).toLowerCase();
      const aClean = aNorm.replace(/[^\wа-яё]/gi, "");
      return n === aNorm || nClean === aClean;
    });
  });
}

function mapHeaders(rawHeaders) {
  const headers = rawHeaders.map((h) => h.trim());
  const get = (... names) => {
    for (const n of names) {
      const aliases = COL_ALIASES[n];
      if (!aliases) continue;
      const i = findColumnIndex(headers, aliases);
      if (i !== -1) return i;
    }
    return -1;
  };
  return {
    date: get("date"),
    day: get("day"),
    fajr: get("fajr"),
    dhuhr: get("dhuhr"),
    asr: get("asr"),
    maghrib: get("maghrib"),
    isha: get("isha"),
  };
}

function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (!inQuotes && (c === "," || c === ";" || c === "\t")) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];
  const rawHeaders = parseCsvLine(lines[0].replace(/^\uFEFF/, ""));
  const map = mapHeaders(rawHeaders);
  const needDate = map.date >= 0;
  const needDay = map.day >= 0 && !needDate;
  if (!needDate && !needDay) {
    console.error("В CSV нужна колонка с датой (date/дата) или с днём (day/день).");
    process.exit(1);
  }
  if (needDay && (month == null || year == null)) {
    console.error("Для CSV с колонкой «день» укажите --month=MM и --year=YYYY.");
    process.exit(1);
  }
  const required = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  for (const r of required) {
    if (map[r] === -1) {
      console.error("В CSV не найдена колонка:", r);
      process.exit(1);
    }
  }

  const schedule = {};
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    let dateStr;
    if (needDate) {
      const raw = cells[map.date];
      if (!raw || !raw.trim()) continue;
      const d = raw.trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(d)) dateStr = d;
      else if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(d)) {
        const [day, month, year] = d.split(".");
        dateStr = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      } else continue;
    } else {
      const dayNum = parseInt(cells[map.day], 10);
      if (Number.isNaN(dayNum) || dayNum < 1 || dayNum > 31) continue;
      const monthStr = String(month).padStart(2, "0");
      dateStr = `${year}-${monthStr}-${String(dayNum).padStart(2, "0")}`;
    }
    const time = (idx) => {
      const v = (cells[idx] || "").trim();
      return /^\d{1,2}:\d{2}$/.test(v) ? v : v.replace(/^(\d{1,2})\.(\d{2})$/, "$1:$2");
    };
    schedule[dateStr] = {
      fajr: time(map.fajr),
      dhuhr: time(map.dhuhr),
      asr: time(map.asr),
      maghrib: time(map.maghrib),
      isha: time(map.isha),
    };
  }
  return schedule;
}

let month = null;
let year = null;
let outputPath = DEFAULT_OUTPUT;
let merge = false;
const args = process.argv.slice(2).filter((a) => {
  if (a.startsWith("--month=")) {
    month = parseInt(a.slice("--month=".length), 10);
    return false;
  }
  if (a.startsWith("--year=")) {
    year = parseInt(a.slice("--year=".length), 10);
    return false;
  }
  if (a.startsWith("--output=")) {
    outputPath = a.slice("--output=".length);
    return false;
  }
  if (a === "--merge") {
    merge = true;
    return false;
  }
  return true;
});

const inputFile = args[0];
let content;
if (inputFile) {
  content = fs.readFileSync(inputFile, "utf8");
} else {
  content = fs.readFileSync(process.stdin.fd, "utf8");
}

const newSchedule = parseCsv(content);
let schedule = newSchedule;
if (merge && fs.existsSync(outputPath)) {
  const existing = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  schedule = { ...(existing.schedule || existing), ...newSchedule };
}

const output = { schedule };
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");
console.log("Записано записей:", Object.keys(schedule).length, "→", outputPath);
