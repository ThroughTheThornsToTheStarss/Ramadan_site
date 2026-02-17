function CrescentIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`inline-flex items-center gap-3 no-underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded ${className}`}
      aria-label="Рамазан — на главную"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-logo)] bg-primary text-white"
        aria-hidden
      >
        <CrescentIcon className="h-6 w-6" />
      </span>
      <span className="text-xl font-semibold text-white whitespace-nowrap">
        Рамазан
      </span>
    </a>
  );
}

/** Logo for light background (header on white) */
export function LogoDark({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`inline-flex items-center gap-3 no-underline text-[var(--text-dark)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded ${className}`}
      aria-label="Рамазан — на главную"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-logo)] bg-primary text-white"
        aria-hidden
      >
        <CrescentIcon className="h-6 w-6" />
      </span>
      <span className="text-xl font-semibold whitespace-nowrap">Рамазан</span>
    </a>
  );
}
