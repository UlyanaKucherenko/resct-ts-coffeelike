import { ReactNode } from 'react';
import { ButtonIcon, IconHover } from './styled';

interface RButtonIconProps {
  size?: number;
  color?: string;
  children: ReactNode;
  asButton?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  onClick?: () => void;
}

export function RButtonIcon({
  size = 24,
  color = '#989898',
  onClick = () => {},
  children,
  asButton = false,
  disabled = false,
  readonly = false,
}: RButtonIconProps) {
  return (
    <ButtonIcon
      as={asButton ? 'button' : undefined}
      type={asButton ? 'button' : undefined}
      size={size}
      onClick={!disabled ? onClick : undefined}
      isDisabled={disabled}
      isReadonly={readonly}
    >
      {children}
      <IconHover color={color} />
    </ButtonIcon>
  );
}
