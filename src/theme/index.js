import { createTheme } from '@mui/material';
import {
  amber,
  blue,
  green,
  cyan,
  orange,
  red,
  yellow,
} from '@mui/material/colors';
import { opaque } from './utils';

const generateTheme = (paletteType) => {
  const fixedFontFamily = 'monospace';
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  const black = '#000000';
  const white = '#ffffff';

  const overrides = {};

  const theme = {
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        xxl: 2560,
      },
    },
    navigation: {
      shrinkedWidth: 7.5,
      expandedWidth: 36,
    },
    palette: {
      mode: paletteType,
      background: {
        dark: '#121212',
        default: paletteType === 'dark' ? '#121212' : '#f0f2f5',
      },
      common: {
        black,
        white,
      },
      navigation: {
        background: '#002a3f',
        foreground: white,
      },
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        contrastText: white,
      },
      secondary: {
        light: orange[300],
        main: orange[500],
        dark: orange[700],
        contrastText: white,
      },
      error: {
        light: red[300],
        main: red[500],
        dark: red[700],
        contrastText: white,
      },
      warning: {
        light: amber[300],
        main: amber[500],
        dark: amber[700],
        contrastText: white,
      },
      info: {
        light: cyan[300],
        main: cyan[500],
        dark: cyan[700],
        contrastText: white,
      },
      almostSuccess: {
        light: yellow[300],
        main: yellow[500],
        dark: yellow[700],
        contrastText: black,
      },
      success: {
        light: green[300],
        main: green[500],
        dark: green[700],
        contrastText: white,
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    shadows: [
      'none',
      `0px 0px 25px -10px ${opaque(0.1)}`,
      `0px 0px 25px -9px ${opaque(0.1)}`,
      `0px 0px 25px -8px ${opaque(0.1)}`,
      `0px 0px 25px -7px ${opaque(0.1)}`,
      `0px 0px 25px -6px ${opaque(0.1)}`,
      `0px 0px 25px -5px ${opaque(0.1)}`,
      `0px 0px 25px -4px ${opaque(0.1)}`,
      `0px 0px 25px -3px ${opaque(0.1)}`,
      `0px 0px 25px -2px ${opaque(0.1)}`,
      `0px 0px 25px -1px ${opaque(0.1)}`,
      `0px 0px 25px 0px ${opaque(0.1)}`,
      `0px 0px 25px 1px ${opaque(0.1)}`,
      `0px 0px 25px 2px ${opaque(0.1)}`,
      `0px 0px 25px 3px ${opaque(0.1)}`,
      `0px 0px 25px 4px ${opaque(0.1)}`,
      `0px 0px 25px 5px ${opaque(0.1)}`,
      `0px 0px 25px 6px ${opaque(0.1)}`,
      `0px 0px 25px 7px ${opaque(0.1)}`,
      `0px 0px 25px 8px ${opaque(0.1)}`,
      `0px 0px 25px 9px ${opaque(0.1)}`,
      `0px 0px 25px 10px ${opaque(0.1)}`,
      `0px 0px 25px 11px ${opaque(0.1)}`,
      `0px 0px 25px 12px ${opaque(0.1)}`,
      `0px 0px 25px 13px ${opaque(0.1)}`,
      `0px 0px 25px 14px ${opaque(0.1)}`,
    ],
    typography: {
      htmlFontSize: 16,
      fontFamily: defaultFontFamily,
      fontFamilyFixed: fixedFontFamily,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: defaultFontFamily,
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontFamily: defaultFontFamily,
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      h4: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      h5: {
        fontFamily: defaultFontFamily,
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: '0em',
      },
      h6: {
        fontFamily: defaultFontFamily,
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      subtitle1: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontFamily: defaultFontFamily,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      body1: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      button: {
        fontFamily: defaultFontFamily,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
      },
      caption: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
      overline: {
        fontFamily: defaultFontFamily,
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase',
      },
    },
    shape: {
      borderRadius: 4,
      readableWidth: 640,
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    nprogress: {
      color: black,
    },
    mixins: {
      toolbar: {
        minHeight: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: 48,
        },
        '@media (min-width:600px)': {
          minHeight: 64,
        },
      },
    },
    props: {
      MuiTypography: { component: 'div' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: paletteType === 'dark' ? '#2b2b2b' : '#6b6b6b',
              width: '10px',
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: paletteType === 'dark' ? '#6b6b6b' : '#2b2b2b',
              minHeight: 24,
              border: `3px solide ${
                paletteType === 'dark' ? '#2b2b2b' : '#6b6b6b'
              }`,
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
              {
                backgroundColor: paletteType === 'dark' ? '#d9d9d9' : '#959595',
              },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
              {
                backgroundColor: paletteType === 'dark' ? '#d9d9d9' : '#959595',
              },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: paletteType === 'dark' ? '#d9d9d9' : '#959595',
              },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: paletteType === 'dark' ? '#2b2b2b' : '#6b6b6b',
            },
          },
        },
      },
    },
    overrides,
  };

  overrides.MuiCssBaseline = {
    '@global': {
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        margin: 0,
        padding: 0,
        height: '100vh',
      },
      body: {
        overflowY: 'scroll',
        '&.sb-show-main.sb-main-padded': {
          padding: 0,
        },
      },
    },
  };

  overrides.MuiLink = {
    root: {
      cursor: 'pointer',
    },
  };

  return createTheme(theme);
};

export default generateTheme;
