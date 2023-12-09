import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'

function MobileHome() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900 lg:hidden">
      <FeedSelector />

      {/* TODO: posts */}

      <Navbar />
    </div>
  )
}

export default MobileHome
