import styled, { css } from 'styled-components';

import { device } from 'utils/device';

const Form = styled.form<{
  error?: boolean;
  height?: number;
}>`
  position: relative;
  width: 100%;
  border: 2px dashed
    ${({ theme, error }) => (error ? theme.error : theme.brightGray)};
  border-radius: 6px;
  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 0;
          padding-top: 72%;
        `};
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (${device.xxs}) {
    flex-direction: column;
  }
`;

const SelectButton = styled.label`
  color: ${({ theme }) => theme.tuftsBlue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { Form, Content, ContentWrap, SelectButton };
