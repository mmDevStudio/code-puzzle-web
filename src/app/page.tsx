// import {Post} from "@/components/Post";

import MobileHome from '@/components/routes/mobile/home'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <div className="flex h-screen flex-col items-center justify-center">
          <Button>Button</Button>
        </div>
      </div>
    </div>
  )
}
