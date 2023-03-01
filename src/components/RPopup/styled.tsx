import styled, { CSSObject, CSSProp } from 'styled-components';

import { device } from 'utils/device';

const Popup = styled.div<{
  width: number;
  fullHeight?: boolean;
  maxHeight?: number;
  popupCss?: CSSProp | CSSObject;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'none')};
  margin: auto;
  padding: 28px 40px 40px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gainsboro};
  border-radius: 16px;
  ${({ popupCss }) => popupCss};

  @media (${device.xxs}) {
    padding: 28px 16px 40px;
    ${({ popupCss }) => popupCss};
  }
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
  margin-top: 20px;
  margin-bottom: 28px;
  text-align: center;
  ${({ css }) => css}
`;

const Close = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
`;

export { Popup, Header, Title, Close };
