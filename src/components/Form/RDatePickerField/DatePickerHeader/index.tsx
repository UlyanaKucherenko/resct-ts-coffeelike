import { memo, useRef } from 'react';
import { getMonth, getYear } from 'date-fns';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { useToggle } from 'hooks/useToggle';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { generateArrayOfYears } from 'utils/prepare';
import { months } from 'utils/const';
import { FlexWrap } from 'components/App/GlobalStyled';
import {
  FieldDropdown,
  RootFieldDropdownOption,
} from 'components/Form/_shared/styled';
import { Wrap, Month, BtnArrow, Select, SelectField } from './styled';

const years = generateArrayOfYears();

function DatePickerHeader({
  monthDate,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) {
  const selectRef = useRef(null);
  const [openedDropdown, setOpenedDropdown] = useToggle(false);

  useOutsideClick(selectRef, () => {
    if (openedDropdown) setOpenedDropdown();
  });

  const onChangeYear = (value: number) => () => {
    changeYear(value);
    setOpenedDropdown();
  };

  return (
    <Wrap>
      <Select ref={selectRef}>
        <SelectField onClick={setOpenedDropdown}>
          {getYear(monthDate)}
          {/* TODO: add chevron icon */}
          🔽
        </SelectField>
        {openedDropdown && (
          <FieldDropdown>
            {years.map((option) => (
              <RootFieldDropdownOption
                key={option}
                active={getYear(monthDate) === option}
                onClick={onChangeYear(option)}
              >
                {option}
              </RootFieldDropdownOption>
            ))}
          </FieldDropdown>
        )}
      </Select>

      <FlexWrap>
        <BtnArrow
          type="button"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          {/* TODO: add chevron icon */}
          🔽
        </BtnArrow>
        <Month>{months[getMonth(monthDate)]}</Month>
        <BtnArrow
          type="button"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          {/* TODO: add chevron icon */}
          🔽
        </BtnArrow>
      </FlexWrap>
    </Wrap>
  );
}

export const MemoizedDatePickerHeader = memo(DatePickerHeader);
