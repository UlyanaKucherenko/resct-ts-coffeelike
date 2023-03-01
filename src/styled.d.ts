import { CSSObject, CSSProp } from 'styled-components';

import { CustomTheme } from 'components/App/Theme';

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
