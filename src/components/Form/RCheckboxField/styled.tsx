import styled from 'styled-components';

const CheckboxWrap = styled.div`
  display: inline-flex;
  align-items: center;
`;

const CheckboxLabel = styled.label<{
  size: number;
  disabled?: boolean;
}>`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

const Label = styled.div`
  line-height: 16px;
  margin-left: 8px;
`;

export { CheckboxWrap, CheckboxLabel, Label };
