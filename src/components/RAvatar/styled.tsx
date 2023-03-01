import styled from 'styled-components';

const Main = styled.div``;

const Wrap = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  position: relative;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.brightGray};
  border-radius: 50%;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

const Name = styled.div<{ size: number }>`
  font-size: ${({ size }) => `${size / 2}px`};
  color: ${({ theme }) => theme.spanishGray};
  font-weight: 500;
  text-transform: uppercase;
`;

export { Main, Wrap, Image, Name };
