import { useState, useMemo, useRef, useEffect, ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  RootFieldDropdownOption,
  DropdownOptionPrependIcon,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

interface IValue {
  label: string;
  value: string | number;
  path?: string;
}

interface AutocompleteFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  options: IValue[];
  value: IValue;
  height?: number;
  labelStatic?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onChange: (value: IValue | object) => void;
}

function AutocompleteField({
  name,
  label,
  placeholder,
  helperText,
  options = [],
  value,
  height = 40,
  labelStatic = false,
  error = false,
  fullWidth = false,
  disabled = false,
  onChange = () => {},
}: AutocompleteFieldProps) {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const ref = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState(value.label || '');

  useEffect(() => {
    if (Object.values(value).length > 0 && value.label !== fieldValue) {
      setFieldValue(value.label);
    }
  }, [value]);

  const onChangeFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value);
  };

  const onFocus = () => {
    setIsFocus(true);
    onOpenDropdown();
  };

  const onBlur = () => {
    if (!dropdownIsOpened) setIsFocus(false);
  };

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
    if (!fieldValue.length) onChange({});
    else setFieldValue(value.label || '');
  };

  const onChooseOption = (option: IValue) => {
    setFieldValue(option.label);
    onChange(option);
    setDropdownIsOpened(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  const filteredOptions = useMemo(() => {
    if (fieldValue.length) {
      return options.filter((option) => {
        return option.label.toLowerCase().includes(fieldValue.toLowerCase());
      });
    }
    return options;
  }, [fieldValue]);

  const renderOptions = () => {
    if (!filteredOptions.length) return <RListIsEmpty />;

    return filteredOptions.map((option) => (
      <RootFieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        {option.path && (
          <DropdownOptionPrependIcon
            src={option.path}
            alt=""
          />
        )}
        <span>{option.label}</span>
      </RootFieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

  return (
    <Wrap
      fullWidth={fullWidth}
      ref={ref}
    >
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
          type="text"
          height={height}
          error={error}
          value={fieldValue}
          activated={isFilled}
          placeholder={placeholder}
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          labelStatic={labelStatic}
        />
        <FieldIcons>🔎</FieldIcons>
        {dropdownIsOpened && <FieldDropdown>{renderOptions()}</FieldDropdown>}
      </FieldWrap>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

interface RAutocompleteFieldProps {
  label: string;
  name: string;
  control: Control;
  options: IValue[];
}

export function RAutocompleteField({
  label,
  name,
  control,
  options,
  ...rest
}: RAutocompleteFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AutocompleteField
          name={name}
          label={label}
          value={value}
          options={options}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
