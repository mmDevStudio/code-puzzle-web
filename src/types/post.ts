import { Project } from './project'
import { EXAMPLE_USERS, UserType } from './user'

export type CodeBlock = { filename: string; languageId: string; code: string }[]

export type TextBlock = string

export type ContentBlock =
  | { type: 'code'; data: CodeBlock }
  | { type: 'text'; data: TextBlock }

export type Content = ContentBlock[]

export type Interactions = {
  numberOfLikes: number
  numberOfComments: number
  numberOfShares: number
  topThreeCommentators: UserType[]
}

export type PostType = {
  id: string
  author: UserType
  content: Content
  interactions: Interactions
  project: Project
  relTimestamp: string
}

export const EXAMPLE_POST: PostType = {
  id: '1',
  author: EXAMPLE_USERS[1],
  content: [
    {
      type: 'code',
      data: [
        {
          filename: 'index.js',
          languageId: 'javascript',
          code: `import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`,
        },
        {
          filename: 'blabla.html',
          languageId: 'html',
          code: `<html>uwu</html>`,
        },
      ],
    },
    {
      type: 'text',
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec`,
    },
  ],
  interactions: {
    numberOfLikes: 10,
    numberOfComments: 3,
    numberOfShares: 2,
    topThreeCommentators: [
      EXAMPLE_USERS[0],
      EXAMPLE_USERS[1],
      EXAMPLE_USERS[2],
    ],
  },
  project: {
    name: 'react',
    url: 'uwu.com',
  },
  relTimestamp: '1h',
}
