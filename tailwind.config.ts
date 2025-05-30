import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  safelist: [
    {
      pattern: /^text-(red|blue|green|yellow|purple)-400$/,
    },
    {
      pattern: /^bg-(red|green|blue|white|indigo)-?.+$/,
    },
  ],
  plugins: [],
} satisfies Config;
