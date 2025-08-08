'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { type Locale, contentData } from '@/lib/i18n'

interface CareerSectionProps {
  locale: Locale
}

const CareerSection = ({ locale }: CareerSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const careers = contentData[locale].career.items

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="section-padding container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {contentData[locale].career.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contentData[locale].career.subtitle}
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-black mx-auto"
            />
          </div>

          {/* 경력 타임라인 */}
          <div className="max-w-4xl mx-auto">
            {careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* 타임라인 라인 */}
                {index < careers.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-300 hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 기간 */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -left-2 top-2 w-4 h-4 bg-black rounded-full hidden md:block" />
                      <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                        {career.period}
                      </div>
                    </div>
                  </div>

                  {/* 경력 내용 */}
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-black">{career.company}</h3>
                    <p className="text-gray-700 font-semibold mb-4">@ {career.position}</p>
                    
                    <ul className="space-y-2">
                      {career.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-800 leading-relaxed flex items-start font-medium">
                          <span className="text-black mr-2 mt-1 font-bold">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CareerSection
