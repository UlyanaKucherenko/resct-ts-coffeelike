import { Control, Controller } from 'react-hook-form';
import { ChangeEvent } from 'react';

import { SwitchWrap, SwitchLabel } from './styled';

interface SwitchFieldProps {
  name: string;
  size?: number;
  value?: boolean;
  disabled?: boolean;
  onChange: (isChecked: boolean) => void;
}

function SwitchField({
  name,
  size = 28,
  value = false,
  disabled = false,
  onChange = () => {},
}: SwitchFieldProps) {
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <SwitchWrap>
      <input
        type="checkbox"
        id={name}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <SwitchLabel
        size={size}
        htmlFor={name}
        active={value}
        disabled={disabled}
      />
    </SwitchWrap>
  );
}

interface RSwitchFieldProps {
  label: string;
  name: string;
  control: Control;
}

export function RSwitchField({ name, control, ...rest }: RSwitchFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <SwitchField
          name={name}
          value={value || false}
          onChange={onChange}
          {...rest}
        />
      )}
    />
  );
}
