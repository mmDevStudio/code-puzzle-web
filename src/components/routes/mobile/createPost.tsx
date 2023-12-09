import { ArrowLeft, Check } from 'lucide-react'

import Headbar from '@/components/mobile/headbar'
import Navbar from '@/components/mobile/navbar'

function MobileCreatePost() {
  return (
    <>
      <Headbar
        leftIcon={ArrowLeft}
        rightIcon={Check}
        title="Create Post"
        leftAction={() => {
          window.location.href = '/'
        }}
      />

      <Navbar selected="home" />
    </>
  )
}

export default MobileCreatePost
