import dayjs from 'dayjs';
import localeRU from 'dayjs/locale/ru.js';
import { DateTime, DateTimeOptions } from 'luxon';

dayjs.locale(localeRU);

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatToDate = (timestamp: number | string) => {
  return capitalize(dayjs(timestamp).format('dd DD.MM.YYYY HH:mm'));
};

export const formatToTimestamp = (date: string) => {
  return +new Date(date);
};

export const formatStringDateToTimestamp = (date: string, options?: DateTimeOptions) => {
  return DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm', options).toMillis();
};
