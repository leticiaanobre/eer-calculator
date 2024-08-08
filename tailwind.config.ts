import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addBase }: { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        select: {
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          padding: '8px 12px',
          backgroundColor: '#ffffff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
          color: '#333',
          width: '100%',
          height: '40px',
        },
        'select:focus': {
          outline: 'none',
          borderColor: 'var(--color-primary)',
          boxShadow: '0 0 0 2px rgba(78, 176, 117, 0.2)',
        },
      });
    },
  ],
};

export default config;
