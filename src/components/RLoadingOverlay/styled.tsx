import styled from 'styled-components';

const Overlay = styled.div<{ bgColor: string; isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease;
`;

export { Overlay };
