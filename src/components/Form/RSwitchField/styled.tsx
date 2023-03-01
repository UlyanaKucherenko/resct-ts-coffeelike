import styled, { css } from 'styled-components';

const ratio = 1.8;

const SwitchWrap = styled.div`
  display: inline-flex;
`;

const SwitchLabel = styled.label<{
  size: number;
  disabled?: boolean;
  active?: boolean;
}>(
  ({ size, disabled, active, theme }) => css`
    position: relative;
    display: block;
    width: ${`${(size * ratio).toFixed(0)}px`};
    height: ${`${size}px`};
    background-color: ${active ? theme.tuftsBlue : theme.blueChalk};
    border: 1px solid ${active ? theme.tuftsBlue : theme.gainsboro};
    border-radius: 14px;
    cursor: pointer;

    &:hover {
      border-color: ${active ? theme.coolBlue : theme.gainsboro};
      background-color: ${active ? theme.coolBlue : theme.lavenderPinocchio};
    }

    &:focus {
      border-color: ${theme.bluish};
      background-color: ${active ? theme.coolBlue : theme.lavenderPinocchio};
    }

    &:active {
      border-color: ${active ? theme.tuftsBlue : theme.gainsboro};
      background-color: ${active ? theme.mariner : theme.languidLavender};
    }

    ${disabled &&
    css`
      pointer-events: none;
      border-color: ${theme.harp};
      background-color: ${active ? theme.harp : theme.alabaster};
    `};

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${active ? `calc(100% - ${size - 6}px - 2px)` : '2px'};
      width: ${`${size - 6}px`};
      height: ${`${size - 6}px`};
      background-color: ${theme.white};
      border-radius: 50%;
      transition: 0.05s linear;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08);
    }
  `
);

export { SwitchWrap, SwitchLabel };
