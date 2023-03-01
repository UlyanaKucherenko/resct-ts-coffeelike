import styled from 'styled-components';

import {
  RootFieldInput,
  RootFieldIcons,
  RootFieldDropdownOption,
} from '../_shared/styled';

const FieldInput = styled(RootFieldInput)<{
  withPrependIcon: boolean;
}>`
  padding: ${({ withPrependIcon }) =>
    withPrependIcon ? '12px 40px 12px 48px' : '12px 40px 12px 12px'};
  cursor: pointer;
`;

const FieldIcons = styled(RootFieldIcons)<{
  isOpened: boolean;
}>`
  right: 8px;
  transform: ${({ isOpened }) =>
    isOpened
      ? 'translateY(-50%) rotate(-180deg)'
      : 'translateY(-50%) rotate(0deg)'};
  transition: transform 0.3s ease-in-out;
`;

const FieldPrependIcon = styled.img`
  position: absolute;
  display: block;
  width: 28px;
  height: 18px;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  border-radius: 2px;
`;

const FieldDropdownOption = styled(RootFieldDropdownOption)`
  padding: 8px 14px;
`;

export { FieldInput, FieldIcons, FieldDropdownOption, FieldPrependIcon };
