'use client'

import DesktopHome from './desktop'
import MobileHome from './mobile'

export default function Home() {
  return (
    <div className="h-screen bg-stone-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </div>
  )
}
