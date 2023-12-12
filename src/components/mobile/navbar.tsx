'use client'

import {
  SearchIcon,
  SendHorizontalIcon,
  HomeIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'

interface NavbarProps {
  selected?: 'search' | 'chat' | 'home' | 'projects' | 'user'
}

function Navbar(
  { selected }: NavbarProps = {
    selected: 'home',
  }
) {
  return (
    <div className="flex h-16 w-full shrink-0 border-t-2 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex w-1/5 items-center justify-center">
        <SearchIcon
          height={24}
          width={24}
          className={`text-stone-700 dark:text-stone-200 ${
            selected === 'search' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <SendHorizontalIcon
          height={24}
          width={24}
          className={`text-stone-700 dark:text-stone-200 ${
            selected === 'chat' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <HomeIcon
          height={32}
          width={32}
          className={`text-stone-700 dark:text-stone-200 ${
            selected === 'home' ? 'fill-current' : ''
          }`}
          onClick={() => {
            if (selected !== 'home') window.location.href = '/'
          }}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <PuzzleIcon
          height={24}
          width={24}
          className={`text-stone-700 dark:text-stone-200 ${
            selected === 'projects' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <UserIcon
          height={24}
          width={24}
          className={`text-stone-700 dark:text-stone-200 ${
            selected === 'user' ? 'fill-current' : ''
          }`}
        />
      </div>
    </div>
  )
}

export default Navbar
