import { PlusIcon } from 'lucide-react'

import FeedSelector from '@/components/mobile/feedSelector'
import Navbar from '@/components/mobile/navbar'
import Post from '@/components/post'
import PostContainer from '@/components/postContainer'
import { EXAMPLE_POST } from '@/types/post'

export default function MobileHome() {
  return (
    <div className="flex h-screen flex-col">
      <FeedSelector />
      {/* TODO: posts */}
      <PostContainer>
        <Post {...EXAMPLE_POST} />
        <Post {...EXAMPLE_POST} />
        <Post {...EXAMPLE_POST} />
        <Post {...EXAMPLE_POST} />
        <Post {...EXAMPLE_POST} />
      </PostContainer>

      <div className="fixed bottom-20 right-4 rounded-full bg-stone-200 p-4 dark:bg-muted">
        <PlusIcon
          size={32}
          onClick={() => {
            window.location.href = '/createPost'
          }}
        />
      </div>
      <Navbar selected="home" />
    </div>
  )
}
