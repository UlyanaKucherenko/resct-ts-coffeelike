import styled, { css } from 'styled-components';

import { Label } from '../_shared/styled';

const FieldLabel = styled(Label)`
  top: ${({ focus, activated }) => (focus || activated ? '0' : '20px')};
`;

const FieldInput = styled.textarea<{
  height: number;
  error?: boolean;
  activated?: boolean;
  labelStatic?: boolean;
}>`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  padding: 10px 12px;
  resize: none;
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

const HelperBlock = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const AmountSymbols = styled.div`
  min-height: 18px;
  font-size: 10px;
  font-weight: 500;
  margin: 2px 0;
`;

export { FieldLabel, FieldInput, HelperBlock, AmountSymbols };
