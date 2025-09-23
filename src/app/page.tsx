import HeroSection from '@/components/HeroSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ProjectPortfolio from '@/components/ProjectPortfolio'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <HeroSection />
      <ExperienceTimeline />
      <ProjectPortfolio />
    </main>
  );
}
