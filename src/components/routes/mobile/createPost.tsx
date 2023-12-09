'use client'

import { ArrowLeft, Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import Headbar from '@/components/mobile/headbar'
import Navbar from '@/components/mobile/navbar'

function MobileCreatePost() {
  const vscode: VSCodeImportedData = JSON.parse(
    useSearchParams().get('vscode') || '{}'
  )
  if (vscode) {
  }

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

      <Navbar />
    </>
  )
}

export default MobileCreatePost
