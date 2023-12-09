import { ArrowLeft, Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import Headbar from '@/components/mobile/headbar'
import Navbar from '@/components/mobile/navbar'

export default function MobileCreatePost() {
  const vscode = useSearchParams().get('vscode')

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

      {vscode && (
        <div className="absolute top-20">{JSON.stringify(vscode)}</div>
      )}

      <Navbar />
    </>
  )
}
