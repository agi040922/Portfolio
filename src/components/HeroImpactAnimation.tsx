'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const HeroImpactAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // 스크롤에 따른 다양한 변환 효과
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -10])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [1, 1, 0.5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  
  // 텍스트 개별 애니메이션
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1.1, 0.9])

  // 배경 그라데이션 효과
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* 동적 배경 */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      />
      
      {/* 떠다니는 요소들 */}
      <motion.div
        style={{ scale, rotate, opacity, y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* 메인 원형 요소 */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 rounded-full border-2 border-gray-200 opacity-20"
        />
        
        {/* 작은 원형 요소들 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * Math.cos(i * 60 * Math.PI / 180), 0],
              y: [0, 100 * Math.sin(i * 60 * Math.PI / 180), 0],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-4 h-4 bg-black rounded-full"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-8px',
              marginTop: '-8px'
            }}
          />
        ))}
      </motion.div>

      {/* 메인 텍스트 */}
      <motion.div
        style={{ y: textY, scale: textScale }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
            PORTFOLIO
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-1 bg-black mx-auto mb-8"
            style={{ maxWidth: '200px' }}
          />
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-6">
            DEVHOON 풀스택 개발 팀
          </p>
          
          {/* GitHub, Velog, 문의하기 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 text-lg"
          >
            <a
              href="https://github.com/agi040922"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                GitHub
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left"></span>
              </span>
            </a>
            <div className="text-gray-700 hover:text-black transition-colors relative group cursor-pointer">
              <span className="relative">
                문의하기
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left"></span>
                {/* 호버 시 나타나는 개인정보 */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border text-sm">
                  <p className="mb-1">jkh040922@gmail.com</p>
                  <p>010-5953-5318</p>
                </div>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">스크롤 다운</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 파티클 효과 */}
      {[...Array(12)].map((_, i) => {
        // 고정된 값들을 사용하여 hydration 오류 방지
        const positions = [15, 25, 35, 45, 55, 65, 75, 85, 20, 40, 60, 80]
        const xMovements = [-30, 20, -40, 35, -25, 45, -35, 25, -20, 40, -45, 30]
        const durations = [4, 5, 4.5, 5.5, 4.2, 5.8, 4.8, 5.2, 4.3, 5.3, 4.7, 5.7]
        const delays = [0, 0.5, 1, 1.5, 0.2, 0.8, 1.2, 1.8, 0.3, 0.7, 1.3, 1.7]
        
        return (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [-20, -100, -20],
              x: [0, xMovements[i], 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: durations[i],
              repeat: Infinity,
              delay: delays[i]
            }}
            className="absolute w-2 h-2 bg-gray-300 rounded-full"
            style={{
              left: `${positions[i]}%`,
              top: '80%'
            }}
          />
        )
      })}
    </div>
  )
}

export default HeroImpactAnimation
