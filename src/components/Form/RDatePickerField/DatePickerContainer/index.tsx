import { memo } from 'react';

import { CalendarContainerProps } from 'react-datepicker';
import { Wrap } from './styled';

function DatePickerContainer({ children }: CalendarContainerProps) {
  return <Wrap>{children}</Wrap>;
}

export const MemoizedDatePickerContainer = memo(DatePickerContainer);
