'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const qaItems = [
    {
      question: "DEVHOON은 어떤 팀인가요?",
      answer: "2024년 3월부터 현재까지 운영되고 있는 풀스택 웹/앱 개발 팀입니다. 팀 리더 정경훈을 중심으로 백엔드 개발자, 디자이너와 협력하여 다양한 프로젝트를 성공적으로 완수하고 있습니다."
    },
    {
      question: "주요 개발 기술은 무엇인가요?",
      answer: "Next.js, TypeScript, Tailwind CSS를 중심으로 한 프론트엔드 개발과 Node.js, Supabase, MySQL을 활용한 백엔드 개발을 진행합니다. AWS, Vercel을 통한 배포 및 인프라 관리도 담당하고 있습니다."
    },
    {
      question: "어떤 서비스를 제공하나요?",
      answer: "웹 & 인공지능 솔루션, 네이버 블로그 제작 및 관리, SEO 최적화 서비스를 제공합니다. 특히 하청 없는 직접 개발, 소스코드 제공, 비개발자도 쉽게 사용할 수 있는 어드민 페이지 제작을 강점으로 하고 있습니다."
    },
    {
      question: "팀 리더는 어떤 경력을 가지고 있나요?",
      answer: "현재 fair인사노무 컨설팅의 대표 개발자 및 PM으로 활동하고 있으며, 크몽에서 평점 5점을 유지하며 외주 프로젝트를 성공적으로 진행하고 있습니다."
    }
  ]

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
              소개
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              개발자로서의 가치관과 목표
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

            {/* 심플 모던 Q&A 토글 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {qaItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-8">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* 연락처 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="pt-8 border-t border-gray-200 max-w-4xl mx-auto"
            >
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:devhoon.team@gmail.com"
                  className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors"
                >
                  📧 이메일 문의
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/devhoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black text-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition-colors"
                >
                  🔗 GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
