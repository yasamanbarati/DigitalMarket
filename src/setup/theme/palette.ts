export const palette = {
  neutral: {
    main: '#fff',
    contrastText: '#444444',
  },
  dark: {
    main: '#444444',
    contrastText: '#fff',
  },
  violet: {
    main: '#e82c59',
    light: '#e83551c7',
    contrastText: '#fff',
  },
  blue: {
    main: '#0a1c5d',
    light: '#dde3f7',
    contrastText: '#fff',
  },
  black: '#000000',
  orange: '#FFA726',
  footerBG: '#042030',
  footerfootnoteBG: '#0a1c36',
}
//#13284e  #e83551  #dde3f7  #FFA726
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    dark: Palette['primary']
    violet: Palette['primary']
    blue: Palette['primary']
    black: string
    orange: string
    footerBG: string
    footerfootnoteBG: string
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
    violet?: PaletteOptions['primary']
    blue?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    dark: true
    violet: true
    blue: true
  }
}
