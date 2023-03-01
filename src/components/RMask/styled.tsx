import styled from 'styled-components';

const Mask = styled.div<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 16px;
  background-color: ${({ color }) => color};
  z-index: 500;
`;

export { Mask };
