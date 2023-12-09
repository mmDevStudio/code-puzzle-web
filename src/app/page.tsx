// import {Post} from "@/components/Post";

import { PlusIcon } from 'lucide-react'

import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'

function MobileHome() {
  return (
    <>
      <FeedSelector />

      {/* TODO: posts */}

      <div className="fixed bottom-20 right-4 rounded-full bg-stone-200 p-4 dark:bg-stone-800">
        <PlusIcon
          size={32}
          onClick={() => {
            window.location.href = '/createPost'
          }}
        />
      </div>

      <Navbar selected="home" />
    </>
  )
}

function DesktopHome() {
  return <div>Test</div>
}

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
