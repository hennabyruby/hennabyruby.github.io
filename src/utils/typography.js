import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 500,
  headerColor: "var(--hbr-shocking-pink)",
  headerFontFamily: ["Roboto", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Roboto", "Helvetica", "sans-serif"],
  googleFonts: [
    {
      name: "Roboto",
      styles: ["400", "400i", "500", "700"],
    },
  ],
  overrideStyles: () => ({
    body: {
      backgroundColor: "var(--hbr-white)",
    },
    ":root": {
      "--hbr-pink": "#cc9ac6",
      "--hbr-dark-pink": "#c1134e",
      "--hbr-shocking-pink": "#e91e63",
      "--hbr-white": "#f8f8f8",
      "--hbr-dark": "#333333",
      "--hbr-gray": "#888",
      "--hbr-light-gray": "#ddd",
      "--hbr-henna-green": "#dd7",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
