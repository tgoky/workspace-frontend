import { createTheme } from '@material-ui/core/styles';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

const fontStack = [
  '"DM Sans"',
  'system-ui',
  '-apple-system',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  '"Liberation Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
].join(',');

const fontStyles: Record<string, TypographyStyleOptions> = {
  h1: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 500,
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
  },
  h3: {
    fontSize: '21px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  'body-lg': {
    fontFamily: fontStack,
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'none' as const,
    fontWeight: 400,
  },
  'body-lg-med': {
    fontFamily: fontStack,
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'none' as const,
    fontWeight: 500,
  },
  'body-sm': {
    fontFamily: fontStack,
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'none' as const,
    fontWeight: 400,
  },
  'body-sm-med': {
    fontFamily: fontStack,
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'none' as const,
    fontWeight: 500,
  },
  'subline-lg': {
    fontFamily: fontStack,
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  'subline-sm': {
    fontFamily: fontStack,
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
};

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: { main: '#B2951E', light: '#CDF7D2', dark: '#004708' },
    background: {
      default: '#333333',
      dsb: '#232323',
      divider: '#B2951E',
      paper: '#232743',
      light: '#0d1417',
      content: '#0d1417',
      contentLight: '#F4F4F4',
      header: '#232323',
      footer: '#232323',
      cta: '#B2951E',
      appBG: '#333333',
      filters: {
        active: '#B2951E',
        inactive: '#B2951E',
        outline: '#B2951E',
        footer: '#191C29',
      },
      vaults: {
        default: '#4f4212',
        defaultOutline: '#B2951E',
        boostOutline: '#DB8332',
        gov: '#342763',
        govOutline: '#42477B',
        inactive: '#4f4212',
        inactiveOutline: '#762C2C',
      },
      snackbars: {
        bg: '#FFF',
        bgLine: '#E5E5E5',
        bgBtn: '#363B63',
        text: '#2D3153',
        error: '#DC2C10',
      },
    },
    text: {
      primary: '#F5F5FF',
      secondary: '#D0D0DA',
      disabled: '#999CB3',
    },
  },
  typography: {
    fontFamily: fontStack,
    h1: fontStyles['h1'],
    h2: fontStyles['h2'],
    h3: fontStyles['h3'],
    button: fontStyles['body-lg-med'],
    body1: fontStyles['body-lg'],
    body2: fontStyles['body-lg'],
    'body-lg': fontStyles['body-lg'],
    'body-lg-med': fontStyles['body-lg-med'],
    'body-sm': fontStyles['body-sm'],
    'body-sm-med': fontStyles['body-sm-med'],
    'subline-lg': fontStyles['subline-lg'],
    'subline-sm': fontStyles['subline-sm'],
    h4: {
      color: 'red', // DO NOT USE
    },
    h5: {
      color: 'red', // DO NOT USE
    },
    h6: {
      color: 'red', // DO NOT USE
    },
    caption: {
      color: 'red', // DO NOT USE
    },
    subtitle1: {
      color: 'red', // DO NOT USE
    },
    subtitle2: {
      color: 'red', // DO NOT USE
    },
    overline: {
      color: 'red', // DO NOT USE
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1296,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ':root': {
          '--onboard-font-family-normal': 'DM Sans',
          '--onboard-font-family-semibold': 'DM Sans',
          '--onboard-font-family-light': 'DM Sans',
          '--onboard-modal-z-index': '1',
          '--onboard-modal-backdrop': 'rgba(255,255,255,0.2)',
          '--onboard-modal-border-radius': '20px',
          '--onboard-wallet-button-border-radius': '8px',
          '--onboard-connect-header-background': '#111321',
          '--onboard-connect-header-color': '#F5F5FF',
          '--onboard-modal-color': '#F5F5FF',
          '--onboard-modal-background': '#232743',
          '--onboard-main-scroll-container-background': '#232743',
          '--onboard-close-button-background': '#111321',
          '--onboard-close-button-color': '#8A8EA8',
          '--onboard-wallet-button-border-color': '#2D3153',
          '--onboard-wallet-button-background': '#2D3153',
          '--onboard-wallet-button-color': '#D0D0DA',
          '--onboard-wallet-button-background-hover': 'rgba(245, 245, 255, 0.08)',
          '--onboard-wallet-app-icon-border-color': '#fff',
          '--onboard-wallet-app-icon-background-transparent': '#fff',
          '--onboard-connect-sidebar-background': '#121212',
          '--onboard-connect-sidebar-color': '#F5F5FF',
        },
      },
    },
    MuiInputBase: {
      input: fontStyles['body-lg-med'],
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(8px)',
      },
    },
  },
});

export { theme };
