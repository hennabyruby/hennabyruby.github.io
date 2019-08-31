import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 500,
  headerColor: 'var(--hbr-shocking-pink)',
  headerFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '400i', '500', '700'],
    },
  ],
  overrideStyles: () => ({
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      backgroundColor: 'var(--hbr-white)',
    },
    '::selection': {
      backgroundColor: 'var(--hbr-henna-green)',
    },
    '.container': {
      display: 'block',
      width: '100%',
      margin: '0 auto',
      padding: '1rem',
      maxWidth: '960px',
    },
    '.section': {
      marginTop: '3.5rem',
    },
    '.unstyled': { listStyle: 'none', margin: 0, padding: 0 },
    '.inline li, .inline dt, .inline dd': { display: 'inline-block' },
    '.inline > * + *': { marginLeft: '.75rem' },
    ':root': {
      '--hbr-pink': '#cc9ac6',
      '--hbr-dark-pink': '#c1134e',
      '--hbr-shocking-pink': '#e91e63',
      '--hbr-white': '#f8f8f8',
      '--hbr-dark': '#333333',
      '--hbr-gray': '#888',
      '--hbr-light-gray': '#ddd',
      '--hbr-henna-green': '#dd7',
      '--hbr-highlight': '#dc7',
    },
    '.lead': {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    '.dimTitle': {
      fontSize: '1rem',
      fontWeight: 'normal',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--hbr-gray)',
      textAlign: 'center',
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
