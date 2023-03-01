import { ChangeEvent, useEffect } from 'react';

import { Control, Controller } from 'react-hook-form';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { CheckboxWrap, CheckboxLabel, Label } from './styled';

interface CheckboxField {
  label: string;
  name: string;
  size?: number;
  error: boolean;
  value: boolean;
  disabled?: boolean;
  checkboxStatic?: boolean;
  setError?: (error: boolean) => void;
  onChange: (value: boolean) => void;
}

function CheckboxField({
  label,
  name,
  error,
  size = 16,
  value,
  disabled = false,
  checkboxStatic = false,
  setError = () => {},
  onChange = () => {},
}: CheckboxField) {
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  useEffect(() => {
    (function onPassError() {
      setError(error);
    })();
  }, [error]);

  const renderCheckbox = () => {
    return value ? 'filled icon' : 'empty icon';
  };

  return (
    <CheckboxWrap>
      <input
        type="checkbox"
        id={name}
        size={size}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <CheckboxLabel
        size={size}
        htmlFor={name}
        disabled={disabled}
      >
        {checkboxStatic ? (
          renderCheckbox()
        ) : (
          <RButtonIcon>{renderCheckbox()}</RButtonIcon>
        )}
      </CheckboxLabel>
      {label && <Label>{label}</Label>}
    </CheckboxWrap>
  );
}

interface RCheckboxFieldProps {
  label: string;
  name: string;
  control: Control;
}

export function RCheckboxField({
  label,
  name,
  control,
  ...rest
}: RCheckboxFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CheckboxField
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          error={!!error}
          {...rest}
        />
      )}
    />
  );
}
