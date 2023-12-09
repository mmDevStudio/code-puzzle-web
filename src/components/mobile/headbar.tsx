import React from 'react'

import { LucideIcon } from 'lucide-react'

interface HeadbarProps {
  leftIcon: LucideIcon
  rightIcon: LucideIcon
  title: string
  leftAction?: () => void
  rightAction?: () => void
}

function Headbar({
  leftIcon,
  leftAction,
  rightIcon,
  rightAction,
  title,
}: HeadbarProps) {
  const LeftIcon: React.ReactNode = React.createElement(leftIcon, {
    size: 32,
    className: 'text-slate-500 dark:text-stone-500',
    onClick: leftAction,
  })
  const RightIcon: React.ReactNode = React.createElement(rightIcon, {
    size: 32,
    className: 'text-slate-500 dark:text-stone-500',
    onClick: rightAction,
  })

  return (
    <div className="h-fit-content fixed left-0 top-0 flex w-full border-b border-slate-300 text-lg font-semibold dark:border-stone-700">
      <div className="flex w-1/6 items-center justify-center py-5">
        {LeftIcon}
      </div>
      <div className="flex w-4/6 items-center justify-center py-5">{title}</div>
      <div className="flex w-1/6 items-center justify-center py-5">
        {RightIcon}
      </div>
    </div>
  )
}

export default Headbar
