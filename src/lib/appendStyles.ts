import React, { ComponentType, FC } from 'react'

import clsx from 'clsx'

// eslint-disable-next-line no-unused-vars
type StyleArg<T> = string | ((props: T) => string)

/**
 * Appends styles to a component.
 * @param Component Component to append styles to
 * @param styles Styles to append (either a string or a function that returns a string)
 * @returns A new component with the styles appended
 */
export default function appendStyles<
  T extends ComponentType<any> | keyof React.JSX.IntrinsicElements,
  Props extends Record<string, any> = React.ComponentPropsWithoutRef<T>,
>(Component: T, styles: StyleArg<any>): FC<Props> {
  return function StyledComponent(props) {
    const { className, ...otherProps } = props

    const resolvedStyles = typeof styles === 'function' ? styles(props) : styles
    const newClassName = clsx(className, resolvedStyles || '')

    return React.createElement(Component, {
      className: newClassName,
      ...otherProps,
    })
  }
}
