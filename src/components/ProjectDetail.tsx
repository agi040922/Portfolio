'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { X, ExternalLink, Github, Calendar, Users, Code, Lightbulb, Globe, BookOpen, Award, Target, Image as ImageIcon, Info, Clock, TrendingUp, AlertTriangle } from 'lucide-react'

interface ProjectDetailProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    type: string
    tags: string[]
    demoUrl: string | null
    githubUrl: string | null
    blogUrl?: string | null
    detailDescription?: string
    features?: string[]
    techStack?: string[]
    image?: string
    challenges?: string[]
    achievements?: string[]
    gallery?: string[]
    duration?: string
    teamSize?: string
    role?: string
    developmentProcess?: {
      phase: string
      description: string
      duration: string
    }[]
    learnings?: string[]
  }
  isOpen: boolean
  onClose: () => void
}

type TabType = 'overview' | 'details' | 'tech' | 'process' | 'challenges' | 'achievements' | 'gallery'

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  
  if (!isOpen) return null

  const tabs = [
    { id: 'overview' as TabType, label: '개요', icon: Info },
    { id: 'details' as TabType, label: '상세설명', icon: BookOpen },
    { id: 'tech' as TabType, label: '기술스택', icon: Code },
    { id: 'process' as TabType, label: '개발과정', icon: Clock },
    { id: 'challenges' as TabType, label: '도전과제', icon: AlertTriangle },
    { id: 'achievements' as TabType, label: '성과', icon: Award },
    { id: 'gallery' as TabType, label: '갤러리', icon: ImageIcon }
  ]

  const details = {
    fullDescription: project.detailDescription || project.description,
    technologies: project.techStack || ["정보 없음"],
    features: project.features || ["상세 정보 준비 중"],
    challenges: project.challenges || [],
    achievements: project.achievements || [],
    gallery: project.gallery || [],
    developmentProcess: project.developmentProcess || [],
    learnings: project.learnings || []
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-colors shadow-lg"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* 헤더 영역 */}
        <div className="relative">
          {/* 메인 이미지 헤더 */}
          <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Code className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm font-medium">{project.title}</p>
                </div>
              </div>
            )}
            
            {/* 오버레이 버튼들 */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {project.demoUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors shadow-lg"
                >
                  <Globe className="w-3 h-3" />
                  데모
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-white transition-colors shadow-lg"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </motion.a>
              )}
              {project.blogUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-white transition-colors shadow-lg"
                >
                  <BookOpen className="w-3 h-3" />
                  블로그
                </motion.a>
              )}
            </div>
          </div>

          {/* 프로젝트 제목 및 태그 */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                {project.category}
              </span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                {project.type}
              </span>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-black text-white px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-black border-b-2 border-black bg-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6">
              {/* 프로젝트 정보 그리드 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">팀 규모</p>
                  <p className="font-semibold text-gray-900 text-sm">{project.teamSize || '정보 없음'}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">기간</p>
                  <p className="font-semibold text-gray-900 text-sm">{project.duration || '2-4주'}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Target className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">역할</p>
                  <p className="font-semibold text-gray-900 text-sm">{project.role || '개발자'}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">상태</p>
                  <p className="font-semibold text-green-600 text-sm">완료</p>
                </div>
              </div>

              {/* 주요 기능 */}
              <section>
                <h3 className="text-lg font-bold mb-4 text-gray-900">주요 기능</h3>
                <div className="grid gap-3">
                  {details.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="p-6">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-2xl font-bold mb-4 text-gray-900">{children}</h1>,
                    h2: ({children}) => <h2 className="text-xl font-bold mb-3 text-gray-900">{children}</h2>,
                    h3: ({children}) => <h3 className="text-lg font-bold mb-2 text-gray-900">{children}</h3>,
                    p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                    strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                    ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                    li: ({children}) => <li className="mb-1">{children}</li>
                  }}
                >
                  {details.fullDescription}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="p-6 space-y-6">
              {/* 기술 스택 */}
              <section>
                <h3 className="text-lg font-bold mb-4 text-gray-900">사용 기술</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {details.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Code className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">{tech}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 학습 내용 */}
              {project.learnings && project.learnings.length > 0 && (
                <section>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">기술적 학습</h3>
                  <div className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed text-sm">{learning}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {activeTab === 'process' && (
            <div className="p-6">
              {project.developmentProcess && project.developmentProcess.length > 0 ? (
                <section>
                  <h3 className="text-lg font-bold mb-6 text-gray-900">개발 과정</h3>
                  <div className="space-y-6">
                    {project.developmentProcess.map((process, index) => (
                      <div key={index} className="relative">
                        {/* 타임라인 선 */}
                        {index < project.developmentProcess!.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                        )}
                        
                        <div className="flex items-start gap-4">
                          {/* 단계 번호 */}
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          
                          {/* 내용 */}
                          <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-gray-900">{process.phase}</h4>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {process.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="text-center py-12">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">개발 과정 정보가 준비 중입니다.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="p-6">
              {details.challenges.length > 0 ? (
                <section>
                  <h3 className="text-lg font-bold mb-6 text-gray-900">도전 과제 및 해결 방안</h3>
                  <div className="space-y-4">
                    {details.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-lg p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">도전 과제 {index + 1}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm">{challenge}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="text-center py-12">
                  <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">도전 과제 정보가 준비 중입니다.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="p-6">
              {details.achievements.length > 0 ? (
                <section>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">프로젝트 성과</h3>
                  <div className="space-y-3">
                    {details.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-200">
                        <Award className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="text-center py-12">
                  <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">성과 정보가 준비 중입니다.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="p-6">
              {details.gallery.length > 0 ? (
                <section>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">프로젝트 갤러리</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.gallery.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`${project.title} 스크린샷 ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="text-center py-12">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">갤러리 이미지가 준비 중입니다.</p>
                </div>
              )}
            </div>
          )}

          {/* 하단 액션 버튼 - 모든 탭에서 표시 */}
          <div className="border-t border-gray-100 p-4 bg-gray-50">
            <div className="flex flex-wrap gap-3 justify-center">
              {project.demoUrl && (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  사이트 바로가기
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub 바로가기
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail
