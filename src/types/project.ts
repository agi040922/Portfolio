// 프로젝트 데이터 타입 정의
export interface Project {
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
  period?: string
  features?: string[]
  challenges?: string
  results?: string
  detailImages?: string[]
}
