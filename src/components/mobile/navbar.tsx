import {
  SearchIcon,
  SendHorizontalIcon,
  HomeIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-around  border-t-2 border-slate-300 bg-slate-100">
      <SearchIcon height={32} width={32} className="text-slate-700" />
      <SendHorizontalIcon height={32} width={32} className="text-slate-700" />
      <HomeIcon height={32} width={32} className="text-slate-700" />
      <PuzzleIcon height={32} width={32} className="text-slate-700" />
      <UserIcon height={32} width={32} className="text-slate-700" />
    </div>
  )
}

export default Navbar
