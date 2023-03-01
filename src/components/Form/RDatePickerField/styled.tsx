import styled, { css } from 'styled-components';

import { RootFieldIcons } from '../_shared/styled';

const FieldInput = styled.div<{
  height: number;
  withAppendIcon?: boolean;
  error?: boolean;
  activated?: boolean;
  disabled?: boolean;
  labelStatic?: boolean;
}>`
  .field-input {
    display: block;
    width: 100%;
    height: ${({ height }) => `${height}px`};
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding: ${({ withAppendIcon }) =>
      withAppendIcon ? '12px 48px 12px 12px' : '12px'};
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
    }

    ${({ activated, disabled, theme }) =>
      disabled &&
      css`
        border-color: ${theme.gainsboro};

        color: ${activated ? theme.davyGrey : theme.gainsboro};
        pointer-events: none;
      `}

    ${({ labelStatic }) =>
      !labelStatic &&
      css`
        &::placeholder {
          opacity: 0;
        }

        &:focus {
          &::placeholder {
            opacity: 1;
          }
        }
      `}
  }

  .react-datepicker-popper {
    z-index: 10;
  }
`;

const FieldAppendIcon = styled(RootFieldIcons)<{
  height: number;
  error?: boolean;
}>`
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${({ height }) => `${height}px`} - 10px);
  padding: 0 13px 0 12px;
  border-left: 1px solid
    ${({ error, theme }) => (error ? theme.error : theme.brightGray)};

  ${({ error, theme }) =>
    error &&
    css`
      svg path {
        fill: ${theme.error};
      }
    `}
`;

export { FieldInput, FieldAppendIcon };
