'use client'

import { useEffect, useState } from 'react'

import hljs from 'highlight.js'

import useDarkMode from '@/hooks/useDarkMode'
import { CodeBlock } from '@/types/post'

type CodeWindowProps = {
  files: CodeBlock
}

// syntax highlighting themes
const THEMES = {
  // @ts-ignore
  light: () => import('@/styles/github.highlight.css'),
  // @ts-ignore
  dark: () => import('@/styles/github-dark.highlight.css'),
}

function CodeWindow({ files }: CodeWindowProps) {
  // dynamic import syntax highlighting theme based on dark mode
  const [isDarkMode] = useDarkMode()
  useEffect(() => {
    const theme = THEMES[isDarkMode ? 'dark' : 'light']

    theme()
  }, [isDarkMode])

  const [selectedFile, setSelectedFile] = useState(files[0])
  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1">
        {files.map(file => {
          const handleClick = () => setSelectedFile(file)

          const isSelected = file.filename === selectedFile.filename

          return (
            <button
              key={file.filename}
              type="button"
              className={`dark:bg-stone-8 -mb-[1px] rounded-t-lg border border-stone-200 px-2 py-1 text-xs font-medium text-muted dark:border-stone-500
              ${
                isSelected
                  ? 'border-b-stone-100 bg-stone-100 text-primary dark:border-b-stone-800 dark:bg-stone-800 dark:text-onPrimary'
                  : 'bg-stone-200 dark:bg-stone-700 dark:text-stone-400'
              }`}
              onClick={handleClick}
            >
              {file.filename}
            </button>
          )
        })}
      </div>

      {/* Code */}
      <pre
        className="overflow-x-auto rounded-lg rounded-tl-none border border-stone-200 bg-stone-100 p-2 text-sm text-primary dark:border-stone-500 dark:bg-stone-800 dark:text-onPrimary"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(selectedFile.code, {
            language: selectedFile.languageId,
          }).value,
        }}
      />
    </div>
  )
}

export default CodeWindow
