import { useMemo, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { NumberFormatProps, NumberFormatValues } from 'react-number-format';

import {
  FieldWrap,
  HelperText,
  Label,
  LabelStatic,
  Wrap,
} from '../_shared/styled';
import { FieldInput } from './styled';

interface TextMaskFieldProps extends Omit<NumberFormatProps, 'onChange'> {
  label: string;
  value: string;
  helperText?: string;
  labelStatic?: boolean;
  error?: boolean;
  helperTextStatic?: boolean;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

function TextMaskField({
  name,
  label,
  value,
  placeholder,
  helperText,
  height = 40,
  labelStatic = true,
  error = false,
  helperTextStatic = true,
  fullWidth = false,
  disabled = false,
  hidden = false,
  onChange = () => {},
  ...rest
}: TextMaskFieldProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return !!value || value.length > 0;
  }, [value]);

  const onValueChange = (data: NumberFormatValues) => {
    const { value } = data;
    onChange(value);
    return value;
  };

  return (
    <Wrap fullWidth={fullWidth}>
      {label && labelStatic ? (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      ) : null}
      <FieldWrap>
        {!labelStatic && (
          <Label
            htmlFor={name}
            focus={isFocus}
            activated={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}

        <FieldInput
          id={name}
          height={height}
          error={error ? 'error' : undefined}
          value={value}
          placeholder={placeholder}
          onValueChange={disabled || hidden ? undefined : onValueChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          hidden={hidden}
          readOnly={disabled || hidden}
          labelStatic={labelStatic}
          activated={isFilled}
          {...rest}
        />
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

interface RTextMaskFieldProps {
  name: string;
  label: string;
  control: Control;
}

export function RTextMaskField({
  label,
  name,
  control,
  ...rest
}: RTextMaskFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextMaskField
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
