/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // ✅ Zorgt dat dark mode-typografie werkt
  darkMode: "class",

  safelist: [
    // ✅ Zorg dat deze prose-varianten nooit “weggepurged” worden
    "prose",
    "prose-slate",
    "dark:prose-invert",
    "prose-saas",
  ],

  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(3%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },

      // ✅ Typografie “SaaS 2025” preset
      typography: ({ theme }) => ({
        saas: {
          css: {
            maxWidth: "68ch",
            color: theme("colors.slate.700"),
            a: {
              color: theme("colors.blue.700"),
              textDecoration: "none",
              fontWeight: 600,
              borderBottom: `1px solid ${theme("colors.blue.200")}`,
              transition: "color .2s ease, border-color .2s ease",
            },
            "a:hover": {
              color: theme("colors.blue.800"),
              borderColor: theme("colors.blue.400"),
            },
            h1: {
              color: theme("colors.slate.900"),
              fontWeight: 800,
              letterSpacing: "-0.02em",
            },
            h2: {
              color: theme("colors.slate.900"),
              fontWeight: 800,
              marginTop: "1.6em",
              marginBottom: ".8em",
              letterSpacing: "-0.01em",
            },
            h3: {
              color: theme("colors.slate.900"),
              fontWeight: 700,
              marginTop: "1.4em",
              marginBottom: ".6em",
            },
            p: { lineHeight: "1.8" },
            strong: { color: theme("colors.slate.900") },
            code: {
              backgroundColor: theme("colors.slate.100"),
              padding: ".15rem .35rem",
              borderRadius: ".4rem",
              fontWeight: 600,
            },
            "pre code": { backgroundColor: "transparent", padding: 0 },
            blockquote: {
              borderLeftColor: theme("colors.blue.200"),
              color: theme("colors.slate.700"),
              fontStyle: "normal",
            },
            ul: {
              listStyleType: "none",
              paddingLeft: "0",
            },
            "ul > li": {
              position: "relative",
              paddingLeft: "1.5rem",
            },
            "ul > li::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "0.7em",
              width: "8px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: theme("colors.blue.500"),
              boxShadow: `0 0 0 3px ${theme("colors.blue.100")}`,
            },
            img: {
              borderRadius: theme("borderRadius.xl"),
              boxShadow: theme("boxShadow.xl"),
            },
            hr: { borderColor: theme("colors.slate.200") },
          },
        },
        invert: {
          css: {
            color: theme("colors.slate.300"),
            strong: { color: theme("colors.slate.100") },
            a: {
              color: theme("colors.blue.300"),
              borderBottomColor: theme("colors.blue.700"),
            },
            "a:hover": {
              color: theme("colors.blue.200"),
              borderBottomColor: theme("colors.blue.500"),
            },
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.white") },
            code: { backgroundColor: theme("colors.slate.800") },
            blockquote: {
              borderLeftColor: theme("colors.blue.700"),
              color: theme("colors.slate.300"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.blue.400"),
              boxShadow: `0 0 0 3px ${theme("colors.slate.800")}`,
            },
            hr: { borderColor: theme("colors.slate.700") },
          },
        },
      }),
    },
  },

  // ✅ Activeer de plugin
  plugins: [require("@tailwindcss/typography")],
};
