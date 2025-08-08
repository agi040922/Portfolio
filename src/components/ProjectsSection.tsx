'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { type Locale, contentData } from '@/lib/i18n'

interface ProjectsSectionProps {
  locale: Locale
}

// 프로젝트 데이터 타입 정의
interface Project {
  id: number
  title: string
  description: string
  category: string
  type: string
  tags: string[]
  demoUrl: string
  githubUrl: string | null
  image: string
}

const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const projects = contentData[locale].projects.items

  const filters = ['All', 'Team', 'Single']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    <section id="projects" className="py-20 bg-white">
      <div className="section-padding container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            {contentData[locale].projects.title}
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contentData[locale].projects.subtitle}
          </motion.p>
        </motion.div>

        {/* 필터 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-4 p-2 bg-gray-100 rounded-full">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-black text-white shadow-md'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded bg-gradient-to-br from-gray-900 to-gray-800 aspect-[4/3] cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedProject(project)
                setIsDetailOpen(true)
              }}
            >
              {/* 배경 이미지 영역 */}
              {project.image ? (
                <div className="absolute inset-0">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              )}
              
              {/* 컨텐츠 영역 */}
              <div className="relative h-full p-6 flex flex-col justify-between text-white">
                {/* 상단 태그 */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                {/* 하단 컨텐츠 */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* 태그 */}
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 transform group-hover:scale-100 scale-95"
                >
                  <span>{contentData[locale].projects.viewDetails}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 프로젝트 상세 모달 */}
      {isDetailOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsDetailOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              {selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex gap-4">
                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    라이브 데모
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ProjectsSection
