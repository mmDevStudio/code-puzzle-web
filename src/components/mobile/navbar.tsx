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
    <div className="fixed bottom-0 left-0 flex h-16 w-full border-t-2 bg-slate-100 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex w-1/5 items-center justify-center">
        <SearchIcon
          height={24}
          width={24}
          className={`text-slate-700 dark:text-stone-200 ${
            selected === 'search' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <SendHorizontalIcon
          height={24}
          width={24}
          className={`text-slate-700 dark:text-stone-200 ${
            selected === 'chat' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <HomeIcon
          height={32}
          width={32}
          className={`text-slate-700 dark:text-stone-200 ${
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
          className={`text-slate-700 dark:text-stone-200 ${
            selected === 'projects' ? 'fill-current' : ''
          }`}
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <UserIcon
          height={24}
          width={24}
          className={`text-slate-700 dark:text-stone-200 ${
            selected === 'user' ? 'fill-current' : ''
          }`}
        />
      </div>
    </div>
  )
}

export default Navbar
