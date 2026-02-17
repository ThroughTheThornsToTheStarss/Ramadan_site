import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PrayerSchedule } from "@/components/sections/PrayerSchedule";
import { Contacts } from "@/components/sections/Contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PrayerSchedule />
      <Contacts />
    </>
  );
}
