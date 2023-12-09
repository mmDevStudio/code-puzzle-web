'use client'

import MobileCreatePost from '@/components/routes/mobile/createPost'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <MobileCreatePost />
      <div className="hidden lg:block">
        <div className="flex h-screen flex-col items-center justify-center">
          <Button>Button</Button>
        </div>
      </div>
    </div>
  )
}
