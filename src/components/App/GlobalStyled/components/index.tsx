import styled from 'styled-components';

import { Flex, Block } from 'components/App/GlobalStyled/mixins';
import {
  FlexMixinType,
  BlockMixinType,
} from 'components/App/GlobalStyled/mixins/types';

const Spacer = styled.div<Record<string, string | number>>`
  display: ${({ d = 'inline-block' }) => d};
  width: ${({ w = 0 }) => w};
  height: ${({ h = 0 }) => h};
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
`;

const FlexWrap = styled.div<FlexMixinType & BlockMixinType>`
  ${Flex};
  ${Block};
`;

export { Spacer, FlexWrap };
