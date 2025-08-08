'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'


const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const frontendSkills = [
    { name: 'Next.js', icon: 'nextdotjs.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'CSS3', icon: 'css3.svg' }
  ]
  const backendSkills = [
    { name: 'Node.js', icon: 'nodedotjs.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'Django', icon: 'django.svg' },
    { name: 'Supabase', icon: 'supabase.svg' },
    { name: 'PostgreSQL', icon: 'postgresql.svg' }
  ]
  const tools = [
    { name: 'Git', icon: 'git.svg' },
    { name: 'GitHub', icon: 'github.svg' },
    { name: 'AWS', icon: 'aws.svg' },
    { name: 'Vercel', icon: 'vercel.svg' },
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'Postman', icon: 'postman.svg' }
  ]
  const skillsDescription = '다양한 프론트엔드 기술과 도구들을 활용하여 사용자 중심의 웹 애플리케이션을 개발합니다.'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              기술 스택
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {skillsDescription}
            </p>
          </div>

          {/* 한 줄 배치 스킬 섹션 */}
          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-bold text-black mb-6 text-center"
              >
                Frontend
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4 justify-center"
              >
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    <Image
                      src={`/images/skills/${skill.icon}`}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Backend */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl font-bold text-black mb-6 text-center"
              >
                Backend
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4 justify-center"
              >
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300"
                  >
                    <Image
                      src={`/images/skills/${skill.icon}`}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Tools */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl font-bold text-black mb-6 text-center"
              >
                Tools
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4 justify-center"
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-300"
                  >
                    <Image
                      src={`/images/skills/${tool.icon}`}
                      alt={tool.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
