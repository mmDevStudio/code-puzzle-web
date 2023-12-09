'use client'

import { ArrowLeft, Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import Headbar from '@/components/mobile/headbar'
import Navbar from '@/components/mobile/navbar'
import type { VSCodeImportedData } from '@/lib/types'

function MobileCreatePost() {
  const vscode: VSCodeImportedData = JSON.parse(
    useSearchParams().get('vscode') || '{}'
  )

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

      <div className="absolute top-20">{JSON.stringify(vscode)}</div>

      <Navbar />
    </>
  )
}

export default MobileCreatePost
