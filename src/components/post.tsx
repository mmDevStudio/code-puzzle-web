import React from 'react'

import { GithubIcon, Share2Icon, StarIcon } from 'lucide-react'
import Link from 'next/link'

import getUserInitials from '@/lib/getUserInitials'
import { PostType } from '@/types/post'

import CodeWindow from './code-window'
import { Avatar, AvatarFallback, AvatarImage } from './shadcn/ui/avatar'

function PostHeader({ author, project, relTimestamp }: PostType) {
  const userInitials = getUserInitials(author.username)

  return (
    <header className="flex items-center gap-x-2.5">
      {/* avatar */}
      <Avatar className="h-8 w-8">
        <AvatarImage src={author.avatar} />
        <AvatarFallback>{userInitials.toUpperCase()}</AvatarFallback>
      </Avatar>

      {/* project + user meta */}
      <div className="mr-auto flex flex-col">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary">
          {author.username}
          <span className="ml-[5px] text-sm font-semibold leading-none text-muted-foreground">
            @{author.tag}
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
    </header>
  )
}

function TextBlock({ text }: { text: string }) {
  // TODO: style text blocks
  return <p>{text}</p>
}

function PostContent({ content }: PostType) {
  const contentBlocks = content.map(block => {
    switch (block.type) {
      case 'text':
        return <TextBlock text={block.data} />
      case 'code':
        return <CodeWindow data={block.data} />
      default:
        return null
    }
  })

  return <div>{contentBlocks}</div>
}

function PostActions({ interactions }: PostType) {
  return (
    <footer className="flex items-center gap-x-2.5">
      {/* Top 3 Commentator Avatars */}
      <ol className="flex">
        {interactions.topThreeCommentators.map(user => (
          <li key={user.id}>
            <Avatar className="ml-[-5px] h-5 w-5">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{getUserInitials(user.username)}</AvatarFallback>
            </Avatar>
          </li>
        ))}
      </ol>

      {/* Number of comments */}
      <span className="mr-auto text-sm font-normal leading-none text-muted-foreground">
        {interactions.numberOfComments} Comments
      </span>

      {/* Actions/ Number of likes */}
      <span className="text-sm font-normal leading-none text-muted-foreground">
        <StarIcon className="mr-[5px] inline-block h-4 w-4 text-muted-foreground" />
        {interactions.numberOfLikes} Likes
      </span>

      {/* Actions/ Number of shares */}
      <span className="text-sm font-normal leading-none text-muted-foreground">
        <Share2Icon className="mr-[5px] inline-block h-4 w-4 text-muted-foreground" />
        {interactions.numberOfShares}
      </span>
    </footer>
  )
}

export default function Post(post: PostType) {
  return (
    <div className="flex flex-col gap-y-4">
      <PostHeader {...post} />
      <PostContent {...post} />
      <PostActions {...post} />
    </div>
  )
}
