'use client'

import DesktopCreatePost from '@/components/routes/desktop/createPost'
import MobileCreatePost from '@/components/routes/mobile/createPost'

export default function Home() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileCreatePost />
      </div>
      <div className="hidden lg:block">
        <DesktopCreatePost />
      </div>
    </div>
  )
}
