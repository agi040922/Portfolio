'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types/project'
import { projects } from '@/data/projects'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)



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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            프로젝트
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 프로젝트 경험
          </p>
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
          className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => {
                setSelectedProject(project)
                setIsDetailOpen(true)
              }}
            >
              {/* 이미지 영역 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* 상태 배지 */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                
                {/* 호버 오버레이 - 자세히 보기 */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 py-2 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span>자세히 보기</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
              
              {/* 컨텐츠 영역 */}
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                {/* 태그 */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs border border-gray-200">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
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
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium">
                        {selectedProject.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-900 text-white text-sm font-medium">
                        {selectedProject.status}
                      </span>
                    </div>
                    {selectedProject.period && (
                      <span className="text-gray-500 text-sm">
                        {selectedProject.period}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="p-2 hover:bg-gray-100 transition-colors ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* 좌측: 상세 정보 */}
              <div className="space-y-6">
                {/* 프로젝트 개요 */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    프로젝트 개요
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* 주요 기능 */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      주요 기능
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 기술 스택 */}
                {selectedProject.tags.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      기술 스택
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 도전 과제 */}
                {selectedProject.challenges && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      도전 과제
                    </h4>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  </div>
                )}

                {/* 성과 및 결과 */}
                {selectedProject.results && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      성과 및 결과
                    </h4>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>
                )}

                {/* 액션 버튼 */}
                <div className="flex gap-3 pt-4">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 font-medium hover:bg-gray-800 transition-colors"
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
                      className="flex items-center gap-2 border border-gray-900 text-gray-900 px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* 우측: 이미지 갤러리 */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    프로젝트
                  </h4>
                  
                  {/* 메인 이미지 */}
                  {selectedProject.image && (
                    <div className="mb-4">
                      <div className="relative aspect-video bg-gray-100 border border-gray-200">
                        <Image 
                          src={selectedProject.image} 
                          alt={`${selectedProject.title} 메인 이미지`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">메인 화면</p>
                    </div>
                  )}

                  {/* 상세 이미지들 */}
                  {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                    <div className="space-y-3">
                      {selectedProject.detailImages.map((image, index) => (
                        <div key={index} className="relative aspect-video bg-gray-100 border border-gray-200">
                          <Image 
                            src={image} 
                            alt={`${selectedProject.title} 상세 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 상세 이미지가 없는 경우 보안 안내 */}
                  {(!selectedProject.detailImages || selectedProject.detailImages.length === 0) && selectedProject.image && (
                    <div className="bg-gray-50 border border-gray-200 p-6 text-center">
                      <div className="w-12 h-12 bg-gray-300 mx-auto mb-3 flex items-center justify-center rounded-full">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm font-medium mb-1">상세 이미지 비공개</p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        보안상의 이유로 프로젝트의<br />
                        상세 화면을 직접 공개하기 어려운 점 양해 부탁드립니다.
                      </p>
                    </div>
                  )}

                  {/* 이미지가 전혀 없는 경우 플레이스홀더 */}
                  {!selectedProject.image && (!selectedProject.detailImages || selectedProject.detailImages.length === 0) && (
                    <div className="aspect-video bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-300 mx-auto mb-3 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm font-medium">프로젝트 이미지</p>
                        <p className="text-gray-500 text-xs">준비 중입니다</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ProjectsSection
