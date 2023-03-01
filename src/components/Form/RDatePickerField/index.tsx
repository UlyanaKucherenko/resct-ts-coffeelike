import { ChangeEvent, useMemo, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import DatePicker, {
  CalendarContainerProps,
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as IconCalendarSvg } from 'assets/img/global/datepicker/calendar.svg';
import {
  Wrap,
  Label,
  FieldWrap,
  HelperText,
  LabelStatic,
} from '../_shared/styled';
import { MemoizedDatePickerContainer } from './DatePickerContainer';
import { MemoizedDatePickerHeader } from './DatePickerHeader';
import { FieldInput, FieldAppendIcon } from './styled';

interface DatePickerComponentProps extends ReactDatePickerProps {
  placeholder?: string;
  label: string;
  helperText?: string;
  height?: number;
  fullWidth?: boolean;
  error?: boolean;
  helperTextStatic?: boolean;
  withAppendIcon?: boolean;
  labelStatic?: boolean;
}

function DatePickerComponent({
  placeholder,
  label,
  name,
  helperText,
  value = '',
  height = 40,
  startDate,
  endDate,
  fullWidth = false,
  error = false,
  helperTextStatic = true,
  withAppendIcon = true,
  labelStatic = false,
  disabled = false,
  onChange = () => {},
  ...rest
}: DatePickerComponentProps) {
  const [focus, setFocus] = useState(false);

  const isFilled = useMemo(() => {
    return !!value;
  }, [value]);

  const onChangeDate = (date: Date, event: ChangeEvent) => {
    onChange(date, event);
  };

  const renderCustomHeader = (props: ReactDatePickerCustomHeaderProps) => (
    <MemoizedDatePickerHeader {...props} />
  );

  const calendarContainer = (props: CalendarContainerProps) => {
    return <MemoizedDatePickerContainer {...{ ...props }} />;
  };

  return (
    <Wrap fullWidth={fullWidth}>
      {label && labelStatic && (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      )}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={focus}
            activated={isFilled}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
        )}

        <FieldInput
          height={height}
          error={error}
          activated={isFilled}
          disabled={disabled}
          withAppendIcon={withAppendIcon}
          labelStatic={labelStatic}
        >
          <DatePicker
            placeholderText={placeholder}
            timeCaption="Select time"
            autoComplete="off"
            className="field-input"
            selected={new Date(value)}
            onChange={onChangeDate}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            startDate={startDate}
            endDate={endDate}
            renderCustomHeader={renderCustomHeader}
            calendarContainer={calendarContainer}
            disabled={disabled}
            {...rest}
          />
        </FieldInput>

        {withAppendIcon && (
          <FieldAppendIcon
            height={height}
            error={error}
          >
            <IconCalendarSvg />
          </FieldAppendIcon>
        )}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

interface RDatePickerFieldProps {
  label: string;
  name: string;
  control: Control;
}

function RDatePickerField({
  label,
  name,
  control,
  ...rest
}: RDatePickerFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePickerComponent
          label={label}
          name={name}
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

export { RDatePickerField };
