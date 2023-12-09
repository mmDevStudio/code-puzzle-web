import { ArrowLeft, Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import Headbar from '@/components/mobile/headbar'
import Navbar from '@/components/mobile/navbar'

function MobileCreatePost() {
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

function DesktopCreatePost() {
  return <div>Test</div>
}

export default function Home() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900">
      <div className="lg:hidden">
        <MobileCreatePost />
      </div>
      <div className="hidden lg:block">
        <DesktopCreatePost />
      </div>
    </div>
  )
}

