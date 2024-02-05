import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'img_bg': "url('../assets/bghero.jpg')",
    },

    backgroundIcon:{
      'img_bg': "url('../assets/iconcard3.jpg')",
    },


    extend: {
      colors: {
        'primary-orange': '#2BB673',
        'second-orange': '#22332B',
        'green-one': '#1A6440',
        'green-two': '#2BB673',
        'green-three': '#2E4339',
      }
    },
  },
  plugins: [],
}
export default config
