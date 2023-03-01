import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const Content = styled.main`
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
`;

export { Layout, Main, Content };
