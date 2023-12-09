type Option<
  ComponentProps extends Record<string, any> | undefined = undefined,
> = (ComponentProps extends undefined
  ? {
      [key: string]: any
    }
  : ComponentProps) & {
  use: string | ((props: any) => string)
}

function merged<ComponentProps extends Record<string, any> | undefined>(
  props: ComponentProps | undefined,
  styles: (string | Option<ComponentProps>)[]
) {
  const classes: string[] = []

  styles.forEach(style => {
    // check if style is unconditional
    if (typeof style === 'string') {
      classes.push(style)
      return
    }

    // check if props were passed
    if (!props) return

    // if style is dependent on props, check if all props are fulfilled
    const fulfilled = Object.keys(style).every(key => {
      // exclude 'use' key
      if (key === 'use') return true

      const prop = props[key]
      const styleProp = style[key]

      return prop === styleProp
    })

    if (fulfilled) {
      if (typeof style.use === 'function') {
        classes.push(style.use(props))
      } else {
        classes.push(style.use)
      }
    }
  })

  return classes.join(' ')
}

/**
 * Merges tailwind classes based on the props passed to it.
 * @param styles Styles to merge
 * @returns A function that returns styles as a string based on the props passed to it
 */
export default function tailwindMerge<
  ComponentProps extends Record<string, any> | undefined = undefined,
>(...styles: (string | Option<ComponentProps>)[]) {
  return (props?: any) => merged<ComponentProps>(props, styles)
}
