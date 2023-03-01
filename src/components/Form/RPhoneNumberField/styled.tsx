import styled, { css } from 'styled-components';

import IconSelect from 'assets/img/icons/icon-select.svg';

const FieldInput = styled.div<{
  height: number;
  fullWidth?: boolean;
  error?: boolean;
  activated?: boolean;
  disabled?: boolean;
  focus?: boolean;
}>`
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '280px')};

  .react-tel-input .form-control {
    padding: 8.5px 14px 8.5px 58px;
    width: 100%;
    height: ${({ height }) => `${height}px`};
    color: ${({ theme }) => theme.maastrichtBlue};
    background-color: ${({ theme }) => theme.white};
    border: 1px solid
      ${({ error, activated, theme }) =>
        // eslint-disable-next-line no-nested-ternary
        error ? theme.error : activated ? theme.manatee : theme.brightGray};
    border-radius: 6px;
    transition: 0.15s linear;

    &::placeholder {
      color: ${({ disabled, theme }) =>
        disabled ? theme.gainsboro : theme.spanishGray};
    }

    &:hover {
      border-color: ${({ theme }) => theme.lavenderGray};
    }

    &:focus {
      border-color: ${({ theme }) => theme.cyanBlueAzure};
      box-shadow: none;
    }

    ${({ error, theme }) =>
      error &&
      css`
        border-color: ${theme.error};
        &:focus,
        &:hover {
          border-color: ${theme.error};
        }
      `}

    ${({ activated, disabled, theme }) =>
      disabled &&
      css`
        border-color: ${theme.brightGray};

        color: ${activated ? theme.davyGrey : theme.gainsboro};
        pointer-events: none;
      `}
  }
  .special-label {
    top: 0;
    left: 12px;
    font-size: 12px;
    line-height: 1;
    padding: 0 4px;
    color: ${({ error, theme, focus }) =>
      // eslint-disable-next-line no-nested-ternary
      error ? theme.error : focus ? theme.cyanBlueAzure : theme.davyGrey};
    background: transparent;
    transform: translateY(-50%);

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #fff;
      z-index: -1;
    }

    ${({ error, theme }) =>
      error &&
      css`
        color: ${theme.error};
      `}
  }
  .react-tel-input .selected-flag .arrow {
    border: none;
    width: 10px;
    height: 10px;
    background: center url(${IconSelect}) no-repeat;
    transition: transform 0.3s ease-in-out;

    ${({ error }) =>
      error &&
      css`
        top: calc(50% - 3px);
      `}
    &.up {
      transform: rotate(180deg);
    }
  }
`;

export { FieldInput };
