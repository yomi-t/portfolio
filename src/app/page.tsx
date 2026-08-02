import { AboutSection } from "./_components/about/AboutSection";
import { ActivitiesSection } from "./_components/activities/ActivitiesSection";
import { ArticlesSection } from "./_components/articles/ArticlesSection";
import { HeroSection } from "./_components/hero/HeroSection";
import { SkillsSection } from "./_components/skills/SkillsSection";
import { TimelineSection } from "./_components/timeline/TimelineSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <SkillsSection />
      <ArticlesSection />
      <TimelineSection />
    </main>
  )
}
