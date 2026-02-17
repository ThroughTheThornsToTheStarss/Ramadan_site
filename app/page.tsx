import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PrayerSchedule } from "@/components/sections/PrayerSchedule";
import { Lessons } from "@/components/sections/Lessons";
import { Contacts } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PrayerSchedule />
      <Lessons />
      <Contacts />
      <Footer />
    </>
  );
}
