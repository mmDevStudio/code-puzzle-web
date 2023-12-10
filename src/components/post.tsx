import React from 'react'

import { GithubIcon, Share2Icon, StarIcon } from 'lucide-react'
import Link from 'next/link'

import { PostType } from '@/types/post'

import { Heading4, TextSmall } from './typography'
import UserAvatar from './userAvatar'

function PostHeader({ author, project, relTimestamp }: PostType) {
  return (
    <header className="flex items-center gap-x-2.5">
      {/* avatar */}
      <UserAvatar {...author} />

      {/* project + user meta */}
      <div className="mr-auto flex flex-col">
        <Heading4 className="truncate">
          {author.username}
          <TextSmall className="ml-[5px] inline text-muted">
            @{author.tag}
          </TextSmall>
        </Heading4>

        <Link
          className="w-fit text-sm font-normal text-muted"
          href={project.url}
        >
          <GithubIcon className="mr-[5px] inline-block h-4 w-4 text-muted" />
          {project.name}
        </Link>
      </div>

      {/* relative timestamp */}
      <div className="truncate text-sm font-normal leading-none text-muted">
        {relTimestamp}
      </div>
    </header>
  )
}

function PostContent({ content }: PostType) {
  // Todo: Support interactive content (code windows, etc.)
  return (
    <main className="p-1">
      <p className="line-clamp-5 text-base text-primary">{content}</p>
    </main>
  )
}

function PostActions({ interactions }: PostType) {
  return (
    <footer className="flex items-center gap-x-2.5">
      {/* Top 3 Commentator Avatars */}
      <ol className="flex">
        {interactions.topThreeCommentators.map(user => (
          <li key={user.id} className="-ml-2.5 first:m-0">
            <UserAvatar size={24} {...user} />
          </li>
        ))}
      </ol>

      {/* Number of comments */}
      <span className="mr-auto text-sm font-normal leading-none text-muted">
        {interactions.numberOfComments} Comments
      </span>

      {/* Actions/ Number of likes */}
      <span className="text-sm font-normal leading-none text-muted">
        <StarIcon className="mr-[5px] inline-block h-4 w-4 text-muted" />
        {interactions.numberOfLikes}
      </span>

      {/* Actions/ Number of shares */}
      <span className="text-sm font-normal leading-none text-muted">
        <Share2Icon className="mr-[5px] inline-block h-4 w-4 text-muted" />
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
