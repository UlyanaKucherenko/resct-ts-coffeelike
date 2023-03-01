import styled, { css } from 'styled-components';

import { ReactComponent as IconVerifiedSvg } from 'assets/img/icons/icon-verified.svg';
import { ReactComponent as IconNotVerifiedSvg } from 'assets/img/icons/icon-not-verified.svg';

const Wrap = styled.div<{
  fullWidth?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '280px')};
`;

const FieldWrap = styled.div`
  position: relative;
`;

const Label = styled.label<{
  focus?: boolean;
  activated?: boolean;
  error?: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  top: ${({ focus, activated }) => (focus || activated ? '0' : '50%')};
  left: 12px;
  padding: 0 4px;
  font-size: ${({ focus, activated }) =>
    focus || activated ? '12px' : '14px'};
  line-height: 1;
  color: ${({ error, disabled, focus, theme, activated }) => {
    if (disabled) {
      return activated ? theme.gainsboro : theme.spanishGray;
    }
    if (error) {
      return theme.error;
    }
    if (focus) {
      return theme.cyanBlueAzure;
    }
    if (activated) {
      return theme.davyGrey;
    }
    return theme.spanishGray;
  }};
  pointer-events: none;
  transform: translateY(-50%);
  z-index: 1;
  transition: 0.1s linear;

  ${({ focus, activated, theme }) =>
    (focus || activated) &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${theme.white};
        z-index: -1;
      }
    `};
`;

const LabelStatic = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  display: block;
  margin-bottom: 6px;
  line-height: 1;
  color: ${({ error, disabled, theme }) =>
    // eslint-disable-next-line no-nested-ternary
    disabled ? theme.gainsboro : error ? theme.error : theme.maastrichtBlue};
  transition: 0.1s linear;
`;

const RootFieldInput = styled.input<{
  focus?: boolean;
  activated?: boolean;
  error?: boolean;
  disabled?: boolean;
  labelStatic?: boolean;
}>`
  display: block;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  font-size: ${({ height }) => (height === 28 ? '12px' : '14px')};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.maastrichtBlue};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid
    ${({ error, activated, theme }) =>
      // eslint-disable-next-line no-nested-ternary
      error ? theme.error : activated ? theme.manatee : theme.brightGray};
  border-radius: 6px;
  transition: 0.15s linear;

  &::placeholder {
    color: ${({ disabled, theme }) =>
      disabled ? theme.gainsboro : theme.spanishGray};
  }

  ${({ error, theme }) =>
    !error &&
    css`
      &:hover {
        border-color: ${theme.lavenderGray};
      }

      &:focus {
        border-color: ${theme.cyanBlueAzure};
      }
    `}

  ${({ activated, disabled, theme }) =>
    disabled &&
    css`
      border-color: ${theme.gainsboro};
      color: ${activated ? theme.davyGrey : theme.gainsboro};
      pointer-events: none;
    `}

  ${({ labelStatic }) =>
    !labelStatic &&
    css`
      &::placeholder {
        opacity: 0;
      }

      &:focus {
        &::placeholder {
          opacity: 1;
        }
      }
    `}
`;

const HelperText = styled.div`
  flex: 1 1 auto;
  min-height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.error};
  margin: 2px 0;
`;

const RootFieldIcons = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const IconVerified = styled(IconVerifiedSvg)``;

const IconNotVerified = styled(IconNotVerifiedSvg)``;

const FieldDropdown = styled.div<{
  w?: string;
}>`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: ${({ w = '100%' }) => w};
  height: auto;
  max-height: 166px;
  padding: 6px 0;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gainsboro};
  box-shadow: 0 4px 6px 1px rgba(74, 80, 87, 0.13);
  border-radius: 6px;
  overflow-y: auto;
  z-index: 10;
`;

const RootFieldDropdownOption = styled.div<{
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: 38px;
  line-height: 1;
  padding: 10px 12px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.honeydew};
      color: ${theme.policeBlue};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.honeydew};
  }
`;

const DropdownOptionPrependIcon = styled.img`
  display: block;
  width: 28px;
  height: 18px;
  margin-right: 8px;
  border-radius: 2px;
`;

export {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  RootFieldInput,
  HelperText,
  RootFieldIcons,
  FieldDropdown,
  RootFieldDropdownOption,
  DropdownOptionPrependIcon,
  IconVerified,
  IconNotVerified,
};
