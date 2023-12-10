import React from 'react'

import { EXAMPLE_USERS, UserType } from './user'

export type PostType = {
  id: string
  author: UserType
  content: React.ReactNode | React.ReactNode[]
  interactions: {
    numberOfLikes: number
    numberOfComments: number
    numberOfShares: number
    topThreeCommentators: UserType[]
  }
  project: {
    name: string
    url: string
  }
  relTimestamp: string
}

export const EXAMPLE_POST: PostType = {
  id: '1',
  author: EXAMPLE_USERS[1],
  content:
    'This TypeScript (tsx) code defines a functional React component named Counter that maintains a state variable count and renders a paragraph displaying the current count value along with a button that increments the count when clicked. The useState hook is used to manage the state in a functional component.',
  interactions: {
    numberOfLikes: 24,
    numberOfComments: 5,
    numberOfShares: 165,
    topThreeCommentators: EXAMPLE_USERS.splice(0, 3),
  },
  project: {
    name: 'marcozillgen/valomate',
    url: 'https://uwu.com',
  },
  relTimestamp: '10min ago',
}

// spread all properties of EXAMPLE_POST on the <Post /> component
/*
  <Post
    id={EXAMPLE_POST.id}
    author={EXAMPLE_POST.author}
    content={EXAMPLE_POST.content}
    interactions={EXAMPLE_POST.interactions}
    project={EXAMPLE_POST.project}
    relTimestamp={EXAMPLE_POST.relTimestamp}
  />
*/
