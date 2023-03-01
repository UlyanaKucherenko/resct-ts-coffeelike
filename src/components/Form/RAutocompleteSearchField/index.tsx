import { useState, useMemo, useRef, ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';

import { RLoader } from 'components/RLoader';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldDropdownOption } from './styled';

interface IValue {
  label: string;
  value: string | number;
}

interface AutocompleteSearchFieldProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  height?: number;
  amountSymbols?: number;
  options: IValue[];
  value: IValue;
  labelStatic?: boolean;
  error?: boolean;
  loading?: boolean;
  helperTextStatic?: boolean;
  fullWidth?: boolean;
  onChange: (option: IValue) => void;
  onInput?: (value: string) => void;
}

function AutocompleteSearchField({
  label,
  placeholder,
  helperText,
  height = 40,
  amountSymbols = 3,
  options = [],
  value,
  labelStatic = true,
  error = false,
  loading = false,
  helperTextStatic = true,
  fullWidth = false,
  onChange = () => {},
  onInput = () => {},
}: AutocompleteSearchFieldProps) {
  const ref = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState('');
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const timerId = useRef<any>();

  const onDebounce = (value: string) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (value.length >= amountSymbols) {
        onInput(value);
        setDropdownIsOpened(true);
      }
    }, 1000);
  };

  const onChangeFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(value);
    onDebounce(value);
  };

  const onFocus = () => {
    setIsFocus(true);
    if (fieldValue.length >= amountSymbols) setDropdownIsOpened(true);
  };

  const onBlur = () => {
    if (dropdownIsOpened) setIsFocus(false);
  };

  const onChooseOption = (option: IValue) => {
    setFieldValue(option.label);
    onChange(option);
    setDropdownIsOpened(false);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  const renderOptions = () => {
    if (loading) {
      return (
        <FieldDropdownOption justify="center">
          <RLoader />
        </FieldDropdownOption>
      );
    }
    if (!options.length) return <RListIsEmpty />;

    return options.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        <span>{option.label}</span>
      </FieldDropdownOption>
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
      {labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={isFocus}
            activated={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <FieldInput
          type="text"
          height={height}
          error={error}
          value={fieldValue}
          placeholder={placeholder}
          activated={isFilled}
          labelStatic={labelStatic}
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {dropdownIsOpened && (
          <FieldDropdown className="custom-scroll">
            {renderOptions()}
          </FieldDropdown>
        )}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

interface RAutocompleteSearchFieldProps {
  label: string;
  name: string;
  control: Control;
  options: IValue[];
}

export function RAutocompleteSearchField({
  label,
  name,
  control,
  options,
  ...rest
}: RAutocompleteSearchFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AutocompleteSearchField
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
