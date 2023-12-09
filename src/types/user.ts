export type UserType = {
  id: string
  username: string
  tag: string
  avatar: string
}

export const EXAMPLE_USERS: UserType[] = [
  {
    id: '1',
    username: 'Mika Reich',
    tag: 'mikareich',
    avatar: 'https://avatars.githubusercontent.com/u/33791383?v=4',
  },
  {
    id: '2',
    username: 'Marco Zillgen',
    tag: 'marcozillgen',
    avatar: 'https://avatars.githubusercontent.com/u/77887301?v=4',
  },
  {
    id: '3',
    username: 'shadcn',
    tag: 'shadcn',
    avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
  },
]
