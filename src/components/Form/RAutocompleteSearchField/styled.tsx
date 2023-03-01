import styled from 'styled-components';

import {
  RootFieldInput,
  RootFieldIcons,
  RootFieldDropdownOption,
} from '../_shared/styled';

const FieldInput = styled(RootFieldInput)`
  padding: 12px;
`;

const FieldIcons = styled(RootFieldIcons)`
  right: 12px;
`;

const FieldDropdownOption = styled(RootFieldDropdownOption)<{
  justify?: string;
}>`
  justify-content: ${({ justify = 'space-between' }) => justify};
  padding: 4px 8px 4px 14px;
`;

export { FieldInput, FieldIcons, FieldDropdownOption };
