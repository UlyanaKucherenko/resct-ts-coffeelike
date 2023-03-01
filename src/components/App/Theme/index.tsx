import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  primary: '#A5A5A5',
  error: '#e96b6b',
  white: '#ffffff',
  flamingo: '#eb5757',
  trinidad: '#e93b04',
  transparentTrinidad: 'rgba(233, 59, 4, 0.1)',
  flamePea: '#e56137',
  grenadier: '#d13200',
  fire: '#b92c00',
  coquelicot: '#EE3900',
  indianRed: '#D75959',
  gainsboro: '#d7d9e7',
  maastrichtBlue: '#03182a',
  cyanBlueAzure: '#5282cb',
  brightGray: '#e8eaed',
  spanishGray: '#919599',
  lavenderGray: '#bcc2cb',
  osloGrey: '#889097',
  graniteGray: '#60656A',
  softPeach: '#ededed',
  outerSpace: '#444D55',
  davyGrey: '#535658',
  manatee: '#959ba4',
  romanSilver: '#978F88',
  cultured: '#f4f5f5',
  platinum: '#E1E5E8',
  antiFlashWhite: '#f2f2f2',
  azure: '#F0FCFF',
  tuftsBlue: '#4694DC',
  honeydew: '#ECFFED',
  chineseWhite: '#DEF1DF',
  nyanza: '#D9FEDB',
  aliceBlue: '#F3F8FB',
  policeBlue: '#3e5970',
  blueChalk: '#eaecf5',
  coolBlue: '#3c80bf',
  bluish: '#3c7fbe',
  mariner: '#2e73b2',
  lavenderPinocchio: '#dee0ea',
  languidLavender: '#cdd0e1',
  harp: '#EFEFEF',
  alabaster: '#FAFAFA',
  goGreen: '#00B066',
  geyser: '#DBDDE9',
  dodgerBlue: '#5081FF',
  mountainMist: '#989898',
  spunPearl: '#A8AAB8',
  moonMist: '#DDDDDD',
  goldenBrown: '#EAC60F',
  burntYellow: '#CBAC0E',
  chineseGold: '#C89E0B',
  hintOfGreen: '#E9FDEA',
  titanWhite: '#EAEEF3',
  whiteLilac: '#F7F7F8',
  mercury: '#E3E6E8',
  ghostWhite: '#F9FAFC',
  lilyWhite: '#E1F9FF',
  blackCow: '#4B4B4B',
  quillGrey: '#D9D9D9',
  carbonGrey: '#565C62',
  aquaSpring: '#e9faf1',
  yinMist: '#3b3c3d',
  canvas: '#b88856',
  caneToad: '#9a6e41',
};

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export type CustomTheme = typeof theme;
export default Theme;
