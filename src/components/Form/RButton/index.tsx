import { ReactNode } from 'react';
import { CSSObject, CSSProp } from 'styled-components';

import { Button, ButtonChildren, PrependIcon } from './styled';

interface RButtonProps {
  variant?: 'contained' | 'outline' | 'text';
  fullWidth?: boolean;
  disabled?: boolean;
  prependIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variantColor?: string;
  height?: number;
  form?: string;
  children: ReactNode;
  onClick?: () => void;
  css?: CSSProp | CSSObject;
}

export function RButton({
  type = 'button',
  variant = 'contained',
  variantColor,
  prependIcon,
  fullWidth,
  height = 40,
  disabled = false,
  onClick = () => {},
  children,
  css,
  form,
  ...rest
}: RButtonProps) {
  return (
    <Button
      type={type}
      variant={variant}
      variantColor={variantColor}
      fullWidth={fullWidth}
      height={height}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      css={css}
      form={form}
      {...rest}
    >
      <ButtonChildren>
        {prependIcon && (
          <PrependIcon disabled={disabled}>{prependIcon}</PrependIcon>
        )}
        {children}
      </ButtonChildren>
    </Button>
  );
}
