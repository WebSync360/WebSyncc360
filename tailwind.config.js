/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        /* BRAND TONES (Indigo / Coaching / Mindset) */
        brand: {
          50:  '#f5f7ff', // soft page highlights / glows
          100: '#e9edff', // subtle fills, badges
          200: '#c7d2fe', // borders / small accents
          500: '#6366f1', // primary buttons, links, active nav
          600: '#4f46e5', // hover states
          700: '#4338ca', // emphasis, rare use
        },

        /* BACKGROUNDS */
        app: {
          DEFAULT: '#f3f4f6', // main app/page background (light grey)
          soft: '#f9fafb',    // subtle section backgrounds (off-white / silver)
        },

        /* SURFACES */
        surface: {
          DEFAULT: '#ffffff', // cards, tables, modals (clean white)
          muted: '#f8fafc',   // subtle containers (light silver)
        },

        /* TEXT SYSTEM */
        text: {
          primary: '#111827',   // headings (almost black)
          secondary: '#6b7280', // body text (dark grey)
          muted: '#9ca3af',     // placeholders, hints (light grey)
        },

        /* STATUS COLORS (for later features) */
        success: '#16a34a',  // green success messages
        warning: '#f59e0b',  // yellow warning
        danger: '#dc2626',   // red error
      },

      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // modern, clean
      },

      borderRadius: {
        lg: '0.75rem',  // general rounding for cards/buttons
        xl: '1rem',     // featured elements / hero sections
      },

      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.04)',  // subtle shadow for depth
        card: '0 8px 24px rgba(0,0,0,0.06)',  // stronger shadow for cards & modals
      },
    },
  },
  plugins: [],
};