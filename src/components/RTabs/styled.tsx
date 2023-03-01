import styled, { css } from 'styled-components';

const Tabs = styled.div<{ fullWidth: boolean }>`
  display: flex;
  align-items: flex-end;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${(props) => props.css}

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Tab = styled.div<{
  active?: boolean;
  fullWidth?: boolean;
  minWidth?: string;
  withBorder?: boolean;
}>(
  ({ theme, active, fullWidth, minWidth, withBorder }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${minWidth || '180px'};
    width: ${fullWidth ? '100%' : 'auto'};
    color: ${active ? theme.tuftsBlue : theme.davyGrey};
    background-color: ${active ? theme.azure : 'transparent'};
    border: 1px solid transparent;
    border-bottom-color: ${withBorder ? theme.softPeach : 'transparent'};
    border-radius: 6px 6px 0 0;
    padding: 12px 11px;
    line-height: 16px;
    cursor: pointer;

    &:hover {
      color: ${theme.tuftsBlue};
      background-color: ${theme.azure};
    }

    &:focus {
      color: ${theme.tuftsBlue};
      background-color: ${theme.azure};
      border: 1px solid ${theme.tuftsBlue};
    }

    &:after {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 50%;
      background-color: ${theme.tuftsBlue};
      transform: translate(-50%, 50%);
      transition: 0.15s linear;
    }

    ${active &&
    css`
      font-weight: 500;

      &:after {
        width: 100%;
      }
    `}
  `
);

export { Tabs, Tab };
