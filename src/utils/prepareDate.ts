import { format, isToday, isYesterday } from 'date-fns';

import {
  appDateFormat,
  dayOfMonthFormat,
  dayOfWeekFormat,
  monthFormat,
  twentyFourHourFormat,
  yearFormat,
} from 'utils/formats';

export const prepareDateFromServer = (
  date: number | string,
  timeZoneOffset = 0
) => {
  if (!date) return '';
  const parseDate = typeof date === 'number' ? date : +date;
  const parseDateInMilliseconds = parseDate * 1000;
  const timeZoneOffsetInMilliseconds = +timeZoneOffset * 60 * 1000;
  const offsetDate = parseDateInMilliseconds + timeZoneOffsetInMilliseconds;
  const dateWithTimezone = new Date(offsetDate);
  const dateWithoutTimezone = new Date(
    dateWithTimezone.toISOString().slice(0, -1)
  ).toString();

  return Date.parse(dateWithoutTimezone);
};

export const prepareDateToServer = (
  date: number | string,
  timeZoneOffset = 0
) => {
  if (!date) return '';
  const parseDate = typeof date === 'number' ? date : +date;
  const parseDateInSeconds = parseDate / 1000;
  const currentTimeZoneOffset = new Date().getTimezoneOffset() * 60;
  const dateWithoutTimeZone = parseDateInSeconds - currentTimeZoneOffset;
  const timeZoneOffsetInSeconds = timeZoneOffset * 60;
  return dateWithoutTimeZone - timeZoneOffsetInSeconds;
};

export const prepareDateForNotifications = (date: number) => {
  if (!date) return 'Invalid date';
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, appDateFormat);
};

export const transformDateToLabel = (date: number, period = 'day') => {
  const preparedDate = prepareDateFromServer(date);
  if (preparedDate !== '') {
    switch (period) {
      case 'week':
        return format(preparedDate, dayOfWeekFormat);
      case 'month':
        return format(preparedDate, dayOfMonthFormat);
      case 'year':
        return [
          format(preparedDate, monthFormat),
          format(preparedDate, yearFormat),
        ];
      default:
        return format(preparedDate, twentyFourHourFormat);
    }
  }
  return null;
};
