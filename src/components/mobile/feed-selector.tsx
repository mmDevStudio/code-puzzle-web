'use client'

import { useState } from 'react'

function FeedSelector() {
  const [selected, setSelected] = useState('explore')

  return (
    <div className="select-none h-fit-content fixed left-0 top-0 flex w-full border-b border-slate-300 text-lg font-semibold dark:border-stone-700">
      <div
        className="flex w-1/2 items-center justify-center py-5"
        onClick={() => setSelected('explore')}
        onKeyDown={() => setSelected('explore')}
        role="button"
        tabIndex={0}
      >
        <div
          className={` box-border flex h-8 items-center justify-center px-6 transition duration-500 ease-in-out ${
            selected === 'explore'
              ? 'border-b-2 border-slate-500 dark:border-stone-500'
              : 'border-b-0'
          }`}
        >
          Explore
        </div>
      </div>
      <div
        className="flex w-1/2 items-center justify-center py-5"
        onClick={() => setSelected('followed')}
        onKeyDown={() => setSelected('followed')}
        role="button"
        tabIndex={0}
      >
        <div
          className={`box-border flex h-8 items-center justify-center px-6 transition duration-500 ease-in-out ${
            selected === 'followed'
              ? 'border-b-2 border-slate-500 dark:border-stone-500'
              : 'border-b-0 '
          }`}
        >
          Followed
        </div>
      </div>
    </div>
  )
}

export default FeedSelector
