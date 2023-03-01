import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Loader = styled.div`
  display: block;
  width: 62px;
  height: 62px;
  margin: auto;

  & > svg {
    width: 100%;
    height: 100%;
    animation: ${rotate} 1s ease-in-out infinite;
  }
`;

export { Loader };
