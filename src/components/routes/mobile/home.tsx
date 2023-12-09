import FeedSelector from '@/components/mobile/feed-selector'
import Navbar from '@/components/mobile/navbar'

function MobileHome() {
  return (
    <>
      <FeedSelector />

      {/* TODO: posts */}

      <Navbar selected="home" />
    </>
  )
}

export default MobileHome
