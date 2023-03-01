import styled, { css } from 'styled-components';

import { ReactComponent as IconAddPhoto } from 'assets/img/icons/icon-add-photo.svg';

const Wrap = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
`;

const Label = styled.label<{ thumb: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.brightGray};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: all 0.2s ease;
  ${({ thumb, theme }) =>
    thumb &&
    css`
      background-color: transparent;
      svg {
        opacity: 0;
        path {
          fill: ${theme.white};
        }
      }
      &:hover {
        background-color: rgba(161, 162, 164, 0.7);
        svg {
          opacity: 1;
        }
      }
    `};
`;

const Input = styled.input``;

const Upload = styled(IconAddPhoto)`
  display: block;
  width: 32px;
  height: 32px;
  transition: all 0.2s ease;
`;

export { Wrap, Label, Input, Upload };
