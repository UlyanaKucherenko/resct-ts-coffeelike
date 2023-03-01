import { useMemo, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import {
  FieldWrap,
  HelperText,
  LabelStatic,
  Wrap,
} from 'components/Form/_shared/styled';
import { FieldInput } from './styled';

interface PhoneNumberFieldProps extends PhoneInputProps {
  name: string;
  label: string;
  value: string;
  helperText?: string;
  height?: number;
  error?: boolean;
  fullWidth?: boolean;
  labelStatic?: boolean;
}

function PhoneNumberField({
  name,
  label,
  value,
  helperText,
  height = 40,
  error = false,
  disabled = false,
  fullWidth = false,
  enableSearch = false,
  autoFormat = true,
  enableLongNumbers = false,
  labelStatic = false,
  onChange = () => {},
}: PhoneNumberFieldProps) {
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
        <FieldInput
          fullWidth={fullWidth}
          height={height}
          focus={isFocus}
          activated={isFilled}
          error={error}
          disabled={disabled}
        >
          <PhoneInput
            inputProps={{
              id: name,
              name,
              disabled,
            }}
            disableDropdown={disabled}
            enableSearch={enableSearch}
            enableLongNumbers={enableLongNumbers}
            autoFormat={autoFormat}
            value={value}
            onChange={disabled ? undefined : onChange}
            country="us"
            onlyCountries={['us']}
            specialLabel=""
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FieldInput>
      </FieldWrap>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

interface RPhoneNumberFieldProps extends PhoneInputProps {
  label: string;
  name: string;
  control: Control;
}

export function RPhoneNumberField({
  disabled,
  enableSearch,
  autoFormat,
  enableLongNumbers,
  label,
  name,
  control,
  ...rest
}: RPhoneNumberFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PhoneNumberField
          name={name}
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          disabled={disabled}
          enableSearch={enableSearch}
          enableLongNumbers={enableLongNumbers}
          autoFormat={autoFormat}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
