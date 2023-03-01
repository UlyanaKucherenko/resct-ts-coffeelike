import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.antiFlashWhite};
  box-shadow: 0 4px 6px rgba(219, 221, 244, 0.25);
  border-radius: 12px;
  ${({ css }) => css};
`;

export { Box };
