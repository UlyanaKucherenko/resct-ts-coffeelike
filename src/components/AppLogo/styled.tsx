import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'assets/img/global/logo/app-logo.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled(LogoIcon)`
  display: block;
  margin: 0 auto;
  ${({ css }) => css}
`;

const Text = styled.div`
  font-size: 24px;
  color: white;
  font-style: italic;
  ${({ css }) => css}
`;

export { Wrap, Logo, Text };
