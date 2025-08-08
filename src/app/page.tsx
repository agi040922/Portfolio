import { redirect } from 'next/navigation'

export default function RootPage() {
  // 미들웨어가 처리하지 못한 경우를 위한 백업
  redirect('/ko')
}
