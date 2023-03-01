import styled from 'styled-components';
import { device } from 'utils/device';
import { ReactComponent as BurgerIcon } from 'assets/img/icons/burger-icon.svg';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid black;
  flex-shrink: 0;
`;

const Burger = styled(BurgerIcon)`
  display: none;
  cursor: pointer;
  width: 24px;
  flex-shrink: 0;

  @media (${device.lg}) {
    display: block;
  }
`;

export { Header, Burger };
