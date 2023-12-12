'use client'

import { useState } from 'react'

function FeedSelector() {
  const [selected, setSelected] = useState('explore')

  return (
    <div className="h-fit-content flex w-full select-none border-b border-stone-300 text-lg font-semibold dark:border-stone-700">
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
              ? 'border-b-2 border-muted dark:border-muted'
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
              ? 'border-b-2 border-muted dark:border-muted'
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
