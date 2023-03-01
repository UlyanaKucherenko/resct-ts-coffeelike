import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

const FieldInput = styled(({ activated, labelStatic, ...restProps }) => (
  <NumberFormat {...restProps} />
))`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  padding: 12px;
  font-size: ${({ height }) => (height === 28 ? '12px' : '14px')};
  font-weight: 400;
  line-height: 16px;
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

  ${({ error, theme }) =>
    !error &&
    css`
      &:hover {
        border-color: ${theme.lavenderGray};
      }

      &:focus {
        border-color: ${theme.cyanBlueAzure};
      }
    `}

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
`;

export { FieldInput };
