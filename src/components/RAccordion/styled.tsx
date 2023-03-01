import styled, { css } from 'styled-components';

import { ReactComponent as Chevron } from 'assets/img/user/market/chevron.svg';

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.maastrichtBlue};
  line-height: 100%;
  font-weight: 500;
  user-select: none;
`;

const ChevronIcon = styled(Chevron)<{ open: boolean }>`
  margin-left: 14px;
  transform: ${({ open }) => (open ? 'rotate(-180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const Body = styled.div<{
  hide: boolean;
  maxHeight?: string;
  marginTop?: string;
}>`
  user-select: none;
  grid-column: 2 / 4;
  max-height: 0;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s, opacity 0.1s, visibility 0.1s;
  transition-timing-function: ease;

  ${({ hide, maxHeight, marginTop }) =>
    !hide &&
    css`
      max-height: ${maxHeight || 'none'};
      visibility: visible;
      opacity: 1;
      margin-top: ${marginTop || '32px'};
    `};
`;

export { Container, Header, ChevronIcon, Body };
