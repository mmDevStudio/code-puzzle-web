// import {Post} from "@/components/Post";

import Navbar from '@/components/mobile/navbar'
import { Button } from '@/components/ui/button'

export default function Home() {
  // make responsive design if the screen is mobile or desktop
  // if mobile, use mobile components
  // if desktop, use desktop components

  return (
    <>
      <div className="lg:hidden">
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
