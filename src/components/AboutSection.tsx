'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { type Locale, contentData } from '@/lib/i18n'

interface AboutSectionProps {
  locale: Locale
}

const AboutSection = ({ locale }: AboutSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-padding container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {contentData[locale].about.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contentData[locale].about.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-black mx-auto"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 프로필 이미지 영역 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </motion.div>

            {/* 소개 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {contentData[locale].about.questions.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-4 text-black">{item.q}</h4>
                    <p className="text-gray-800 leading-relaxed font-medium">{item.a}</p>
                  </div>
                ))}
              </div>

              {/* 연락처 정보 */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:example@email.com"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
                  >
                    📧 이메일
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors"
                  >
                    🔗 GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
