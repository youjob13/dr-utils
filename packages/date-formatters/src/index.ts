import dayjs from 'dayjs';
import localeRU from 'dayjs/locale/ru.js';
import { DateTime, DateTimeOptions } from 'luxon';
import { capitalize } from 'utils';

dayjs.locale(localeRU);

export const formatToDate = (timestamp: number | string, options?: { template?: string; capitalizeRes?: boolean }) => {
  const defaultOptions = { template: 'dd DD.MM.YYYY HH:mm', capitalizeRes: true };
  const { template, capitalizeRes } = { ...defaultOptions, ...options };

  if (capitalizeRes) {
    return capitalize(dayjs(timestamp).format(template));
  }

  return dayjs(timestamp).format(template);
};

export const formatToTimestamp = (date: string) => {
  return +new Date(date);
};

export const formatStringDateToTimestamp = (date: string, options?: DateTimeOptions & { format?: string }) => {
  const defaultOptions = { format: 'yyyy-MM-dd HH:mm' };
  const { format, ...otherOptions } = { ...defaultOptions, ...options };
  return DateTime.fromFormat(date, format, otherOptions).toMillis();
};
