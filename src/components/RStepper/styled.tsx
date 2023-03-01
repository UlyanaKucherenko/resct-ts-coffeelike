import styled, { css } from 'styled-components';

import { device } from 'utils/device';
import { Flex } from 'components/App/GlobalStyled';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 40px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${(props) => props.css}

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (${device.xxs}) {
    padding-bottom: 24px;
  }
`;

const Step = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 40px;
  flex-grow: 1;
  border-bottom: 1px solid ${({ theme }) => theme.brightGray};
  padding: 7px 11px;
  background-color: ${({ active, theme }) =>
    active ? theme.azure : 'transparent'};
`;

const StepTitle = styled.div<{ active: boolean; completed: boolean }>`
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 12px;
  flex-grow: 1;
  color: ${({ theme }) => theme.spanishGray};

  &:after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -14px;
    left: 50%;
    background-color: transparent;
    transform: translateX(-50%);
    transition: 0.15s linear;
  }

  ${({ active, theme }) =>
    active &&
    css`
      font-weight: 500;
      color: ${theme.tuftsBlue};

      &:after {
        width: calc(100% + 22px);
        background-color: ${theme.tuftsBlue};
      }
    `}

  ${({ completed, theme }) =>
    completed &&
    css`
      font-weight: 500;
      color: ${theme.tuftsBlue};
    `}
`;

const Icon = styled.div`
  position: absolute;
  right: 20%;
  display: flex;
  align-items: center;
  @media (${device.xxl}) {
    right: 5%;
  }
`;

const ButtonContainer = styled.div<{ withOneButton: boolean }>`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-block: 40px;

  @media (${device.sm}) {
    justify-content: ${({ withOneButton }) =>
      withOneButton ? 'flex-end' : 'space-between'};
  }
`;

const Provider = styled.div``;

const ChevronWrap = styled.div<{ rotate: string }>`
  ${Flex({})};
  transform: rotate(${({ rotate = '0deg' }) => rotate});
`;

export {
  Main,
  Steps,
  Step,
  StepTitle,
  Icon,
  ButtonContainer,
  Provider,
  ChevronWrap,
};
