'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

import Image from 'next/image'



// 프로젝트 데이터 타입 정의
interface Project {
  id: number
  title: string
  description: string
  category: string
  type: string
  tags: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string | null
  status: string
}

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: "FAIR 인사노무컨설팅 웹사이트 재구축 및 AI 기반 콘텐츠 관리 시스템",
      description: "오래된 기존 웹사이트를 전면 재구축하며 기업의 전문성을 강조하는 홈페이지를 제작했습니다. Rich Text Editor와 AI 기반 SEO 메타데이터 자동 생성 시스템을 개발하여 운영 효율성과 온라인 가시성을 크게 향상시켰습니다.",
      category: "Team",
      type: "웹사이트",
      tags: ["Next.js", "TypeScript", "AI", "SEO", "Rich Text Editor"],
      image: "/images/project1.jpg",
      demoUrl: "https://fair-consulting.co.kr",
      githubUrl: null,
      status: "완료"
    },
    {
      id: 2,
      title: "PrayNie.com - AI 추천 기능 스마트 기도 관리 시스템",
      description: "선교회의 제안으로 시작된 기도 관리 시스템으로, AI를 접목하여 사용자 맞춤형 기도 제목 추천과 관련 성구 연결 기능을 제공합니다. SNS형 소통 기능과 개인 기도 관리 기능을 통합한 종합 플랫폼입니다.",
      category: "Team",
      type: "웹앱",
      tags: ["React", "AI", "Firebase", "SNS"],
      image: "/images/project2.jpg",
      demoUrl: "https://prayni.com",
      githubUrl: "https://github.com/example/prayni",
      status: "완료"
    },
    {
      id: 3,
      title: "DebateTimer.org - 차세대 토론 플랫폼",
      description: "한국대학생토론연합회와 협력하여 전국 대학 토론 동아리를 위한 통합 타이머 시스템을 개발했습니다. 다양한 대학별 토론 방식을 하나의 시스템에서 맞춤형으로 관리하며, 다중 기기 화면 송출 기능을 제공합니다.",
      category: "Team",
      type: "웹앱",
      tags: ["Vue.js", "WebSocket", "Node.js", "Multi-device"],
      image: "/images/project3.jpg",
      demoUrl: "https://debatetimer.org",
      githubUrl: "https://github.com/example/debate-timer",
      status: "완료"
    },
    {
      id: 4,
      title: "QR 인증 시스템 & PG 연동 티켓 구매 플랫폼",
      description: "A회사의 티켓 구매 시스템에 QR 인증 기능과 결제 시스템(PG)을 연동하는 통합 솔루션을 개발했습니다. 구매부터 현장 인증까지 전 과정을 자동화하여 운영 효율성과 사용자 편의성을 동시에 향상시켰습니다.",
      category: "Team",
      type: "결제 시스템",
      tags: ["PG연동", "QR코드", "React", "Node.js", "Admin Panel"],
      image: "/images/project4.jpg",
      demoUrl: "#",
      githubUrl: null,
      status: "완료"
    },
    {
      id: 5,
      title: "B회사 웹사이트 UI/UX 디자인 및 프론트엔드 개발",
      description: "B회사의 새로운 웹사이트 구축 프로젝트에서 UI/UX 디자인과 프론트엔드 개발을 담당했습니다. Figma를 활용해 15페이지 분량의 웹사이트 디자인 시안을 제작하고, 반응형 웹 디자인으로 구현했습니다.",
      category: "Single",
      type: "웹사이트",
      tags: ["Figma", "UI/UX", "HTML", "CSS", "JavaScript", "반응형"],
      image: "/images/project5.jpg",
      demoUrl: "#",
      githubUrl: null,
      status: "완료"
    },
    {
      id: 6,
      title: "RAG 기반 명지대학교 입시 Q&A 챗봇",
      description: "교내 경진대회 수상작으로, 현재 모교 입학처 홈페이지에서 실사용 중인 입시 안내 챗봇입니다. RAG 기술을 활용하여 입시 요강을 학습시키고, 할루시네이션 최소화를 위한 다양한 최적화 기법을 적용했습니다.",
      category: "Single",
      type: "AI 챗봇",
      tags: ["RAG", "AI", "Python", "LangChain", "NLP"],
      image: "/images/project6.jpg",
      demoUrl: "https://myongji.ac.kr",
      githubUrl: null,
      status: "완료"
    },
    {
      id: 7,
      title: "대학교 스터디룸 관리 시스템",
      description: "학생지원팀과 협력하여 개발 중인 '대학교 스터디룸 관리 시스템'입니다. 관리자의 스터디룸 관리 업무를 간소화하고 학생들의 예약 및 이용 과정을 크게 단순화하는 것이 목표입니다. Flutter를 활용한 크로스플랫폼 모바일 앱으로 개발하고 있습니다.",
      category: "Team",
      type: "모바일 앱",
      tags: ["Flutter", "Cross-platform", "ERD", "API", "Mobile"],
      image: "/images/project7.jpg",
      demoUrl: "#",
      githubUrl: null,
      status: "개발 중"
    }
  ]

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
                  {/* 개발 상태 배지 */}
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === '완료' 
                      ? 'bg-green-500/90 text-white' 
                      : project.status === '개발 중'
                      ? 'bg-blue-500/90 text-white'
                      : project.status === '기획 중'
                      ? 'bg-yellow-500/90 text-white'
                      : 'bg-gray-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
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
                  <span>자세히 보기</span>
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
