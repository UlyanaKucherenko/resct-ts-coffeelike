import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const BLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${theme.spanishGray};

    & > svg {
      margin: 0 9px;
    }

    &:last-child {
      color: ${theme.policeBlue};

      & > svg {
        display: none;
      }
    }
  `}
`;

export { Breadcrumbs, BLink };
