import React from 'react'

import appendStyles from '@/lib/appendStyles'

const Wrapper = appendStyles('div', 'relative h-full w-full')
const Container = appendStyles(
  'div',
  'absolute flex flex-col gap-12 container mx-auto px-4 py-4 overflow-y-scroll h-full'
)

type PostContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

function PostContainer({ children }: PostContainerProps) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default PostContainer
