import { createMuiTheme } from '../mui';
import './fonts/exo-2.css';
import './fonts/noto-sans.css';
import './fonts/share-tech-mono.css';

/**
 * @typedef {Record<string, import('@material-ui/core/styles/withStyles').CSSProperties>} CssProperties
 */

/**
 * @typedef {(theme: import('@material-ui/core').Theme) => Record<string, import('@material-ui/core/styles/withStyles').CSSProperties>} ThemedCssProperties
 */

export const fontStack = {
  default: ['"Exo 2"', 'NotoSansKR-Light', 'NotoSansJP-Light', 'san-serif'].join(','),
  monospace: ['"Share Tech Mono"'].join(',')
};

/** @type {import('@material-ui/core/styles/createPalette').PaletteOptions} */
const palette = {
  type: 'dark',
  primary: { main: '#e41e26', contrastText: '#F5F5F5' },
  secondary: { main: '#ed3f3f', contrastText: '#263238' }
};

/** @type {import('@material-ui/core/styles/createTypography').TypographyOptions} */
const typography = {
  useNextVariants: true,
  fontFamily: fontStack.default
};

export default createMuiTheme({ palette, typography });
