'use client'

import Post from '@/components/post'
import { EXAMPLE_POST } from '@/types/post'

import DesktopHome from './desktop'
import MobileHome from './mobile'

export default function Home() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </div>
  )
}
