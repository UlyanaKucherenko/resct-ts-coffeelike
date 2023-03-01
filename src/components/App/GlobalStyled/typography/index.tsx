import styled from 'styled-components';

import { BlockMixinType } from '../mixins/types';
import { Block } from '../mixins';

const Typography = styled.div<BlockMixinType & Record<string, string | number>>`
  ${Block};
  font-size: ${({ fz = '14px' }) => fz};
  font-weight: ${({ fw = 400 }) => fw};
  font-style: ${({ fs = 'normal' }) => fs};
  text-transform: ${({ tt = 'none' }) => tt};
  text-decoration: ${({ td = 'none' }) => td};
  text-align: ${({ ta = 'left' }) => ta};
  color: ${({ color = 'initial' }) => color};
  letter-spacing: ${({ ls = 'inherit' }) => ls};
`;

const Heading = styled(Typography)``;

export { Typography, Heading };
