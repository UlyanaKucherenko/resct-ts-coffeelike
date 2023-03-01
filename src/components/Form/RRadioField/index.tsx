import { useTheme } from 'styled-components';
import { ChangeEvent } from 'react';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { DefaultProps } from 'types/common';
import { RadioWrap, RadioLabel, RadioLabelText } from './styled';

interface RRadioFieldProps
  extends Omit<DefaultProps<HTMLInputElement>, 'onChange' | 'checked'> {
  value: string;
  checked: string;
  readonly?: boolean;
  onChange: (value: string) => void;
}

export function RRadioField({
  children,
  value,
  size = 24,
  css,
  checked,
  readonly = false,
  disabled = false,
  onChange = () => {},
}: RRadioFieldProps) {
  const theme = useTheme();

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioWrap css={css}>
      <input
        type="radio"
        id={value}
        size={size}
        value={value}
        checked={checked === value}
        onChange={!disabled || !readonly ? onChangeRadio : undefined}
        disabled={disabled || readonly}
        hidden
      />
      <RadioLabel
        size={size}
        htmlFor={value}
      >
        <RButtonIcon
          color={theme.osloGrey}
          disabled={disabled}
          readonly={readonly}
        >
          {/* TODO: add radio icon  */}✅
        </RButtonIcon>
      </RadioLabel>
      <RadioLabelText>{children}</RadioLabelText>
    </RadioWrap>
  );
}
