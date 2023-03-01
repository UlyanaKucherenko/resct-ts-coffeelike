import styled, { css, CSSObject, CSSProp } from 'styled-components';

const Alert = styled.div<{
  alertCss?: CSSObject | CSSProp;
}>(
  ({ theme, alertCss }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 12px;
    background-color: ${theme.lilyWhite};
    border-radius: 8px;
    color: ${theme.policeBlue};

    ${alertCss};
  `
);

export { Alert };
