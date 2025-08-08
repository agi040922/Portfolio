'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { type Locale, contentData } from '@/lib/i18n'

interface SkillsSectionProps {
  locale: Locale
}

const SkillsSection = ({ locale }: SkillsSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const frontendSkills = contentData[locale].skills.frontend.skills as Array<{ name: string; logo: string } | string>
  const tools = contentData[locale].skills.tools.items as Array<{ name: string; logo: string } | string>
  const skillsDescription = contentData[locale].skills.description

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-padding container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              {contentData[locale].skills.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 text-lg mb-4"
            >
              {contentData[locale].skills.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {skillsDescription}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-black mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{contentData[locale].skills.frontend.title}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {frontendSkills.map((skill, index) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name
                  const skillLogo = typeof skill === 'string' ? null : skill.logo
                  
                  // 디버깅: 콘솔에 스킬 정보 출력
                  console.log('Frontend Skill:', { skill, skillName, skillLogo, type: typeof skill })
                  
                  return (
                    <motion.div
                      key={skillName}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-default group"
                    >
                      {skillLogo ? (
                        <div className="mb-3 flex justify-center">
                          <img 
                            src={skillLogo} 
                            alt={skillName}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              console.error('이미지 로드 실패:', skillLogo)
                              e.currentTarget.style.display = 'none'
                            }}
                            onLoad={() => {
                              console.log('이미지 로드 성공:', skillLogo)
                            }}
                          />
                        </div>
                      ) : (
                        <div className="mb-3 flex justify-center">
                          <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">
                            {skillName.charAt(0)}
                          </div>
                        </div>
                      )}
                      <span className="text-gray-800 font-semibold text-sm">{skillName}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{contentData[locale].skills.tools.title}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {tools.map((tool, index) => {
                  const toolName = typeof tool === 'string' ? tool : tool.name
                  const toolLogo = typeof tool === 'string' ? null : tool.logo
                  
                  // 디버깅: 콘솔에 툴 정보 출력
                  console.log('Tool:', { tool, toolName, toolLogo, type: typeof tool })
                  
                  return (
                    <motion.div
                      key={toolName}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-default group"
                    >
                      {toolLogo ? (
                        <div className="mb-3 flex justify-center">
                          <img 
                            src={toolLogo} 
                            alt={toolName}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              console.error('이미지 로드 실패:', toolLogo)
                              e.currentTarget.style.display = 'none'
                            }}
                            onLoad={() => {
                              console.log('이미지 로드 성공:', toolLogo)
                            }}
                          />
                        </div>
                      ) : (
                        <div className="mb-3 flex justify-center">
                          <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">
                            {toolName.charAt(0)}
                          </div>
                        </div>
                      )}
                      <span className="text-gray-800 font-semibold text-sm">{toolName}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* 추가 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              새로운 기술에 대한 호기심이 많고, 지속적인 학습을 통해 
              더 나은 사용자 경험을 제공하는 웹 서비스를 만들기 위해 노력하고 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
