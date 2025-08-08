import Header from '@/components/Header'
import HeroImpactAnimation from '@/components/HeroImpactAnimation'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import CareerSection from '@/components/CareerSection'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroImpactAnimation />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
