import {
  SearchIcon,
  SendHorizontalIcon,
  HomeIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-around border-t-2 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
      <SearchIcon
        height={32}
        width={32}
        className="text-slate-700 dark:text-slate-200"
      />
      <SendHorizontalIcon
        height={32}
        width={32}
        className="text-slate-700 dark:text-slate-200"
      />
      <HomeIcon
        height={32}
        width={32}
        className="text-slate-700 dark:text-slate-200"
      />
      <PuzzleIcon
        height={32}
        width={32}
        className="text-slate-700 dark:text-slate-200"
      />
      <UserIcon
        height={32}
        width={32}
        className="text-slate-700 dark:text-slate-200"
      />
    </div>
  )
}

export default Navbar
