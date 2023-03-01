import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  padding: 16px;
  background-color: ${({ theme }) => theme.white};
  overflow-y: auto;
`;

export { Layout };
