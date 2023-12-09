import React from 'react'

import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

import getUserInitials from '@/lib/getUserInitials'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type PostType = {
  user: {
    username: string
    tag: string
    avatar: string
  }
  content: React.ReactNode | React.ReactNode[]
  interactions: {
    likes: number
    comments: number
    shares: number
  }
  project: {
    name: string
    url: string
  }
  relTimestamp: string
}

export const POST_EXAMPLE_DATA: PostType = {
  user: {
    username: 'Marco Zillgen',
    tag: 'marcozillgen',
    avatar: 'https://avatars.githubusercontent.com/u/77887301?v=4',
  },
  content:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, recusandae quibusdam. Optio pariatur beatae tempora id? Nostrum aperiam id labore minima repudiandae dolorem sit, similique eveniet velit eaque neque libero.',
  interactions: {
    likes: 0,
    comments: 0,
    shares: 0,
  },
  project: {
    name: 'marcozillgen/valomate',
    url: 'https://uwu.com',
  },
  relTimestamp: '10min ago',
}

function PostHeader({ user, project, relTimestamp }: PostType) {
  const userInitials = getUserInitials('mika reich')

  return (
    <div className="flex items-center gap-x-2.5">
      {/* avatar */}
      <Avatar className="h-8 w-8">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{userInitials.toUpperCase()}</AvatarFallback>
      </Avatar>
      {/* project + user meta */}
      <div className="mr-auto flex flex-col">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary">
          {user.username}
          <span className="ml-[5px] text-sm font-semibold leading-none text-muted-foreground">
            @{user.tag}
          </span>
        </h4>

        <Link
          className="w-fit text-sm font-normal text-muted-foreground"
          href={project.url}
        >
          <GithubIcon className="mr-[5px] inline-block h-4 w-4 text-muted-foreground" />
          {project.name}
        </Link>
      </div>
      {/* relative timestamp */}
      <div className="text-sm font-normal leading-none text-muted-foreground">
        {relTimestamp}
      </div>
    </div>
  )
}

function PostContent(post: PostType) {
  return null
}

function PostActions(post: PostType) {
  return null
}

export default function Post(post: PostType) {
  return (
    <div className="w-full ">
      <PostHeader {...post} />
      <PostContent {...post} />
      <PostActions {...post} />
    </div>
  )
}
