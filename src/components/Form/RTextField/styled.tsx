import styled from 'styled-components';

import { RootFieldIcons, RootFieldInput } from '../_shared/styled';

const FieldInput = styled(RootFieldInput)<{
  appendIcon?: boolean;
}>`
  padding: ${({ appendIcon }) => (appendIcon ? '12px 48px 12px 12px' : '12px')};

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FieldIcons = styled(RootFieldIcons)<{
  disabled?: boolean;
}>`
  right: 12px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover > button > svg {
    fill: ${({ theme }) => theme.graniteGray};
  }

  & > button {
    &:focus {
      & > svg {
        fill: ${({ theme }) => theme.graniteGray};
      }
    }

    &:active {
      & > svg {
        fill: ${({ theme }) => theme.outerSpace};
      }
    }
  }
`;

export { FieldInput, FieldIcons };
