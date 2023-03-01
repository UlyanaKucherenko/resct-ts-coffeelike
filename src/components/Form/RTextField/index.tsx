import { useState, useMemo, useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { DefaultProps } from 'types/common';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

interface TextFieldProps extends DefaultProps<HTMLInputElement> {
  label: string;
  value: string;
  helperText?: string;
  height?: number;
  error?: boolean;
  labelStatic?: boolean;
  helperTextStatic?: boolean;
  fullWidth?: boolean;
}

function TextField({
  name,
  label,
  type = 'text',
  value,
  helperText,
  height = 40,
  labelStatic = true,
  error = false,
  helperTextStatic = true,
  placeholder,
  fullWidth = false,
  disabled = false,
  hidden = false,
  onChange = () => {},
}: TextFieldProps) {
  const [fieldType, setFieldType] = useState(type);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setFieldType(type);
  }, [type]);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const handlePassword = () => {
    const type = fieldType === 'password' ? 'text' : 'password';
    setFieldType(type);
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
        {!labelStatic && (
          <Label
            htmlFor={name}
            focus={isFocus}
            activated={isFilled}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
        )}
        <FieldInput
          id={name}
          type={fieldType}
          height={height}
          appendIcon={fieldType === 'password'}
          error={error}
          placeholder={placeholder}
          onChange={disabled || hidden ? undefined : onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          activated={isFilled}
          disabled={disabled}
          hidden={hidden}
          readOnly={disabled || hidden}
          labelStatic={labelStatic}
        />
        <FieldIcons disabled={disabled}>
          {type === 'password' && (
            <RButtonIcon
              onClick={handlePassword}
              asButton={!disabled}
            >
              {fieldType === 'password' ? '👁' : '👁'}
            </RButtonIcon>
          )}
        </FieldIcons>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

interface RTextFieldProps {
  label: string;
  name: string;
  control: any;
  // control: any; Control
  fullWidth?: boolean;
}

export function RTextField({
  label,
  name,
  control,
  fullWidth,
  ...rest
}: RTextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          fullWidth={fullWidth}
          {...rest}
        />
      )}
    />
  );
}
