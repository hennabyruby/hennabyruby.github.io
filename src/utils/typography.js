import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 500,
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
      backgroundColor: "#f8f8f8",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
