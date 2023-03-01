import { useState, useMemo } from 'react';
import { Control, Controller } from 'react-hook-form';

import { DefaultProps } from 'types/common';
import { Wrap, LabelStatic, FieldWrap, HelperText } from '../_shared/styled';
import { FieldLabel, FieldInput, HelperBlock, AmountSymbols } from './styled';

interface TextareaFieldProps extends DefaultProps<HTMLTextAreaElement> {
  label: string;
  value: string;
  helperText?: string;
  height?: number;
  maxSymbols?: number;
  labelStatic?: boolean;
  fullWidth?: boolean;
  error?: boolean;
}

function TextareaField({
  name,
  label,
  value,
  helperText,
  height = 40,
  placeholder,
  maxSymbols,
  labelStatic = false,
  disabled = false,
  fullWidth = false,
  error = false,
  onChange = () => {},
}: TextareaFieldProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return value.length > 0;
  }, [value]);

  return (
    <Wrap fullWidth={fullWidth}>
      {labelStatic && (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      )}
      <FieldWrap>
        {!labelStatic && (
          <FieldLabel
            htmlFor={name}
            focus={isFocus}
            activated={isFilled}
            disabled={disabled}
            error={error}
          >
            {label}
          </FieldLabel>
        )}
        <FieldInput
          id={name}
          height={height}
          error={error}
          value={value}
          activated={isFilled}
          labelStatic={labelStatic}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FieldWrap>
      <HelperBlock>
        <HelperText>{error && helperText}</HelperText>
        {maxSymbols && (
          <AmountSymbols>
            {value.length} / {maxSymbols}
          </AmountSymbols>
        )}
      </HelperBlock>
    </Wrap>
  );
}

interface RTextareaFieldProps {
  label: string;
  name: string;
  control: Control;
}

function RTextareaField({
  label,
  name,
  control,
  ...rest
}: RTextareaFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextareaField
          name={name}
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}

export { RTextareaField };
