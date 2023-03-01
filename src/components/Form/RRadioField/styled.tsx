import styled from 'styled-components';

const RadioWrap = styled.div`
  display: inline-flex;
  align-items: center;
  ${({ css }) => css};
`;

const RadioLabel = styled.label<{
  size: number;
}>`
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  cursor: pointer;
`;

const RadioLabelText = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 1;
  margin-left: 4px;
`;

export { RadioWrap, RadioLabel, RadioLabelText };
