import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';

const Content = styled.div`
  ${Flex};
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 22px auto 32px;
`;

export { Content, Img };
