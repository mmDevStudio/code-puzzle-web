// import {Post} from "@/components/Post";

import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'
import { Button } from '@/components/ui/button'

// make code testwise darkmode



export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex h-screen flex-col items-center justify-center">
          <FeedSelector />
        </div>

        <Navbar />
      </div>
      <div className="hidden lg:block">
        <div className="flex h-screen flex-col items-center justify-center">
          <Button>Button</Button>
        </div>
      </div>
    </>
  )
}
