import appendStyles from '@/lib/appendStyles'

// Styles based on https://ui.shadcn.com/docs/components/typography

// Headings...
export const Heading1 = appendStyles('h1', 'text-4xl font-semibold lg:text-5xl')

export const Heading2 = appendStyles('h2', 'text-3xl font-semibold lg:text-4xl')

export const Heading3 = appendStyles('h3', 'text-2xl font-semibold lg:text-3xl')

export const Heading4 = appendStyles('h4', 'text-xl font-semibold lg:text-2xl')

// Body...
export const TextLarge = appendStyles('p', 'text-lg font-semibold lg:text-xl')

export const Text = appendStyles('p', 'leading-7 [&:not(:first-child)]:mt-6')

export const TextSmall = appendStyles(
  'small',
  'text-sm font-medium leading-none'
)

export const Code = appendStyles(
  'code',
  'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
)
