'use client'

import HeroImpactAnimation from './HeroImpactAnimation'
import { type Locale } from '@/lib/i18n'

interface HeroSectionProps {
  locale: Locale
}

const HeroSection = ({ locale }: HeroSectionProps) => {
  return (
    <section id="home" className="relative">
      <HeroImpactAnimation locale={locale} />
    </section>
  )
}

export default HeroSection
