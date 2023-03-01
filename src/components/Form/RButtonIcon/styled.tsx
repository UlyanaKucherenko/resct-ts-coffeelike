import styled, { css } from 'styled-components';

const ButtonIcon = styled.div<{
  size: number;
  isDisabled: boolean;
  isReadonly: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;

  &:hover {
    & > div {
      width: ${({ size }) => `${size * 1.5}px`};
      height: ${({ size }) => `${size * 1.5}px`};
    }
  }

  ${({ isDisabled, isReadonly }) =>
    (isDisabled || isReadonly) &&
    css`
      cursor: default;
      &:hover > div {
        width: 0;
        height: 0;
      }
    `};
`;

const IconHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: ${({ color }) => `${color}20`};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.15s linear;
`;

export { ButtonIcon, IconHover };
