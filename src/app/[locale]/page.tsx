import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import CareerSection from '@/components/CareerSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import Footer from '@/components/Footer'
import { type Locale } from '@/lib/i18n'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <SkillsSection locale={locale} />
        <CareerSection locale={locale} />
        <ProjectsSection locale={locale} />
        <EducationSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
