import styled from 'styled-components';

const Popup = styled.div<{
  width: number;
  fullHeight?: boolean;
  maxHeight?: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-height: ${({ maxHeight }) => `${maxHeight}px` || 'auto'};
  min-height: 230px;
  margin: auto;
  padding: 28px 24px 40px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 0 3px 9px rgba(12, 12, 12, 0.15);
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.maastrichtBlue};
  text-align: center;
  padding: 24px 0;
  ${({ css }) => css}
`;

const Close = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
`;

const Body = styled.div``;

const Footer = styled.div<{ buttonPosition?: string }>`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  grid-column-gap: 12px;
  justify-content: ${({ buttonPosition }) => buttonPosition || 'flex-end'};
  margin-top: auto;
`;

export { Popup, Header, Title, Close, Body, Footer };
