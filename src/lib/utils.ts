import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ignore this line because more exports will be added
// eslint-disable-next-line import/prefer-default-export
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
