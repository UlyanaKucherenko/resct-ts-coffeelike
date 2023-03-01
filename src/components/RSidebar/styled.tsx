import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { device } from 'utils/device';

const Sidebar = styled.aside<{
  isOpened: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.yinMist};
  border-right: 1px solid ${({ theme }) => theme.chineseWhite};
  overflow-y: auto;

  @media (${device.lg}) {
    position: fixed;
    z-index: 501;
    width: 272px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 6px 5px 30px 1px rgba(0, 0, 0, 0.08);
    border: 1px solid ${({ theme }) => theme.yinMist};
    transform: ${({ isOpened }) =>
      !isOpened ? 'translateX(-100%)' : 'translateX(0)'};
  }
`;

const Logo = styled.div`
  padding: 16px 18px 5px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.aquaSpring};

  & > svg {
    width: 64px;
    height: 32px;
    margin: 0;
  }

  @media (${device.lg}) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 24px 18px;
    border-bottom: 1px solid ${({ theme }) => theme.blueChalk};

    & > svg {
      width: 64px;
      height: 40px;
    }
  }
`;

const Title = styled.div`
  display: none;
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.ghostWhite};
  margin-bottom: 24px;
  padding-left: 18px;

  @media (${device.lg}) {
    display: block;
  }
`;

const ItemWrap = styled.div`
  display: block;
  width: 100%;
  height: 46px;
  padding: 2px 18px 2px 0;
  margin-bottom: 4px;
`;

const ItemLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 18px;
  color: ${({ theme }) => theme.ghostWhite};
  border-radius: 0 8px 8px 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 26px;
    background: ${({ theme }) => theme.caneToad};
    border-radius: 2px;
    opacity: 0;
  }

  &.active {
    //background-color: ${({ theme }) => theme.nyanza};
    font-weight: 500;
    color: ${({ theme }) => theme.caneToad};

    &:before {
      opacity: 1;
    }

    svg path {
      fill: ${({ theme }) => theme.caneToad};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.canvas};
  }
`;

const ItemIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemText = styled.div`
  width: 100%;
  margin-left: 12px;
`;

export { Sidebar, Logo, Title, ItemWrap, ItemLink, ItemIcon, ItemText };
