// import {Post} from "@/components/Post";

import DesktopHome from '@/components/routes/desktop/home'
import MobileHome from '@/components/routes/mobile/home'

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
