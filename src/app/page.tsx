// import {Post} from "@/components/Post";

import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-slate-50 dark:bg-slate-900 lg:hidden">
        <FeedSelector />

        <Navbar />
      </div>
      <div className="hidden lg:block">
        <div className="flex h-screen flex-col items-center justify-center">
          <Button>Button</Button>
        </div>
      </div>
    </div>
  )
}
