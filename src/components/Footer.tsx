'use client'

import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'

interface FooterProps {
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="section-padding container-max">
        <div className="text-center">
          {/* 메인 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              함께해 주셔서 감사합니다
            </p>
            <div className="text-6xl md:text-8xl font-bold mb-8">
              Thank You
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              
            </p>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://velog.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              📝 Velog
            </motion.a>
          </motion.div>

          {/* 저작권 및 기술 스택 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 text-sm text-gray-400"
          >
            <p className="mb-2">
              Copyright 2024. Frontend Developer all rights reserved.
            </p>
            <p>
              Next.js, TypeScript, Tailwind CSS, Framer Motion 기반으로 제작된 사이트입니다.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
