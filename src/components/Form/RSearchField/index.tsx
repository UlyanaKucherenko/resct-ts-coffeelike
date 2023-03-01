import { useState, useMemo, useRef, ChangeEvent, useEffect } from 'react';

import { DefaultProps } from 'types/common';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

interface RSearchFieldProps
  extends Omit<DefaultProps<HTMLInputElement>, 'onChange'> {
  label: string;
  value: string;
  helperText?: string;
  height?: number;
  amountSymbols?: number;
  labelStatic?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperTextStatic?: boolean;
  onChange: (value: string | null) => void;
}

export function RSearchField({
  label,
  placeholder,
  value = '',
  helperText,
  height = 40,
  amountSymbols = 3,
  labelStatic = true,
  error = false,
  fullWidth = false,
  helperTextStatic = true,
  onChange = () => {},
}: RSearchFieldProps) {
  const ref = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState(value || '');
  const timerId = useRef<any>();

  const onDebounce = (value: string) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (value.length >= amountSymbols) {
        onChange(value);
      }
      if (value.length === 0) {
        onChange(null);
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
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

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
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
          activated={isFilled}
          labelStatic
        />
        <FieldIcons>🔎</FieldIcons>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}
