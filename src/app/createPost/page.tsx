'use client'

import DesktopCreatePost from './desktop'
import MobileCreatePost from './mobile'

export default function Home() {
  return (
    <div className="h-screen bg-stone-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileCreatePost />
      </div>
      <div className="hidden lg:block">
        <DesktopCreatePost />
      </div>
    </div>
  )
}
