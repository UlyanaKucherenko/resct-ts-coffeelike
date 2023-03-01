import styled, { css } from 'styled-components';

const Wrap = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    color: ${theme.spanishGray};
    border: 1px solid ${theme.gainsboro};
    text-align: center;
    border-radius: 4px;
  `
);

const QrImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export { Wrap, QrImage };
