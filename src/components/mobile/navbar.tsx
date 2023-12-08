import {
  SearchIcon,
  SendHorizontalIcon,
  HomeIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full border-t-2 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex w-1/5 items-center justify-center">
        <SearchIcon
          height={24}
          width={24}
          className="text-slate-700 dark:text-slate-200"
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <SendHorizontalIcon
          height={24}
          width={24}
          className="text-slate-700 dark:text-slate-200"
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <HomeIcon
          height={32}
          width={32}
          className="fill-current text-slate-700 dark:text-slate-200"
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <PuzzleIcon
          height={24}
          width={24}
          className="text-slate-700 dark:text-slate-200"
        />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <UserIcon
          height={24}
          width={24}
          className="text-slate-700 dark:text-slate-200"
        />
      </div>
    </div>
  )
}

export default Navbar
