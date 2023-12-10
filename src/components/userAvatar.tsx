'use client'

import { useState } from 'react'

import Image from 'next/image'

import getUserInitials from '@/lib/getUserInitials'

type UserAvatarProps = {
  username: string
  avatar: string
  size?: number
}

export default function UserAvatar({
  username,
  avatar,
  size = 32,
}: UserAvatarProps) {
  const [isLoading, setIsLoading] = useState(true)
  const initials = getUserInitials(username).toUpperCase()

  return (
    <div
      className="relative overflow-hidden rounded-full text-sm font-semibold leading-none text-primary"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center bg-slate-200">
          {initials}
        </div>
      )}

      <Image
        className={isLoading ? 'hidden' : 'block'}
        src={avatar}
        alt={username}
        width={size}
        height={size}
        onLoad={() => setIsLoading(false)}
        loading="eager"
      />
    </div>
  )
}
