// import {Post} from "@/components/Post";

import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'
// import Post, { POST_EXAMPLE_DATA } from '@/components/post'

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-slate-50 dark:bg-slate-900 lg:hidden">
        <FeedSelector />

        <Navbar />
      </div>
      <div className="hidden lg:block">Desktop</div>
    </div>
  )
}
