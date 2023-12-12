import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[900],
        onPrimary: colors.stone[50],
        muted: colors.stone[500],
      },
      fontFamily: {
        body: ['var(--font-body)'],
      },
    },
  },
}

export default config
