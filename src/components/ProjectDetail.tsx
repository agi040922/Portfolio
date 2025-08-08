'use client'

import { motion } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, Code, Lightbulb } from 'lucide-react'

interface ProjectDetailProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    type: string
    tags: string[]
    demoUrl: string
    githubUrl: string | null
  }
  isOpen: boolean
  onClose: () => void
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  if (!isOpen) return null

  // 프로젝트별 상세 정보 (실제로는 데이터베이스나 API에서 가져올 수 있음)
  const projectDetails = {
    1: {
      fullDescription: "강아지 유치원을 위한 종합 모바일 서비스입니다. 반려견 관리, 일정 예약, 실시간 알림 등의 기능을 제공합니다.",
      duration: "2023.03 - 2023.06 (4개월)",
      team: "프론트엔드 2명, 백엔드 2명, 디자이너 1명",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation", "Async Storage"],
      features: [
        "반려견 프로필 관리 시스템",
        "유치원 일정 예약 및 관리",
        "실시간 푸시 알림",
        "사진/동영상 갤러리",
        "결제 시스템 연동"
      ],
      challenges: [
        "React Native 환경에서의 상태 관리 최적화",
        "실시간 알림 시스템 구현",
        "다양한 디바이스 호환성 확보"
      ],
      learned: [
        "모바일 앱 개발 전반적인 프로세스 이해",
        "팀 협업을 통한 프로젝트 관리 경험",
        "사용자 중심의 UI/UX 설계 중요성"
      ]
    },
    2: {
      fullDescription: "데스크 테리어에 관심있는 사람들이 자신의 작업 공간을 공유하고 영감을 얻을 수 있는 커뮤니티 플랫폼입니다.",
      duration: "2023.07 - 2023.09 (3개월)",
      team: "프론트엔드 3명, 백엔드 2명",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
      features: [
        "데스크 셋업 이미지 업로드 및 공유",
        "카테고리별 필터링 시스템",
        "좋아요 및 댓글 기능",
        "사용자 프로필 관리",
        "반응형 웹 디자인"
      ],
      challenges: [
        "이미지 최적화 및 로딩 성능 개선",
        "무한 스크롤 구현",
        "반응형 그리드 레이아웃 설계"
      ],
      learned: [
        "Next.js를 활용한 SSR/SSG 구현",
        "이미지 처리 및 최적화 기법",
        "커뮤니티 서비스의 사용자 경험 설계"
      ]
    }
    // 다른 프로젝트들도 추가 가능
  }

  const details = projectDetails[project.id as keyof typeof projectDetails] || {
    fullDescription: project.description,
    duration: "진행 기간 정보 없음",
    team: "팀 구성 정보 없음",
    technologies: ["정보 없음"],
    features: ["상세 정보 준비 중"],
    challenges: ["상세 정보 준비 중"],
    learned: ["상세 정보 준비 중"]
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
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-semibold">
                  {project.category}
                </span>
                <span className="text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-semibold">
                  {project.type}
                </span>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-black text-white px-3 py-1 rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="p-6 space-y-8">
          {/* 프로젝트 개요 */}
          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              프로젝트 개요
            </h3>
            <p className="text-gray-800 leading-relaxed">{details.fullDescription}</p>
          </section>

          {/* 프로젝트 정보 */}
          <section className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                진행 기간
              </h4>
              <p className="text-gray-800">{details.duration}</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                팀 구성
              </h4>
              <p className="text-gray-800">{details.team}</p>
            </div>
          </section>

          {/* 기술 스택 */}
          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5" />
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 주요 기능 */}
          <section>
            <h3 className="text-xl font-bold mb-4">주요 기능</h3>
            <ul className="space-y-2">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 도전과제 */}
          <section>
            <h3 className="text-xl font-bold mb-4">도전과제</h3>
            <ul className="space-y-2">
              {details.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▲</span>
                  <span className="text-gray-800">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 배운 점 */}
          <section>
            <h3 className="text-xl font-bold mb-4">배운 점</h3>
            <ul className="space-y-2">
              {details.learned.map((learning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-800">{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 링크 버튼들 */}
          <section className="flex gap-4 pt-4 border-t border-gray-200">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              라이브 데모
            </motion.a>
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub 저장소
              </motion.a>
            )}
          </section>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail
