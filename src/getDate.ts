import { getDay } from './getDay';
import { getMonth } from './getMonth';
import { getWeekDay } from './getWeekDay';
import { getYear } from './getYear';
import { DateOptions } from './types';
import { errorMessage, isValidDate } from './utils';

export function getDate(date: Date = new Date(), options: DateOptions = {}) {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);
  const format = options.format || 'eeee, D MMMM, YYYY';

  let formattedDate = format.replace(/eeee|eee/gi, (fmt) => {
    switch (fmt) {
      case 'eee':
        return getWeekDay(inputDate, { format: 'eee' });
      default:
        return getWeekDay(inputDate);
    }
  });

  formattedDate = formattedDate.replace(/DD|D/gi, (fmt) => {
    switch (fmt) {
      case 'DD':
        return getDay(inputDate, { format: 'DD' });
      default:
        return getDay(inputDate);
    }
  });

  formattedDate = formattedDate.replace(/MMMM|MM|M/gi, (fmt) => {
    switch (fmt) {
      case 'M':
        return getMonth(inputDate, { format: 'M' });
      case 'MM':
        return getMonth(inputDate, { format: 'MM' });
      default:
        return getMonth(inputDate);
    }
  });

  formattedDate = formattedDate.replace(/YYYYb|YYYY|YY/gi, (fmt) => {
    switch (fmt) {
      case 'YY':
        return getYear(inputDate, { format: 'YY' });
      case 'YYYYb':
        return getYear(inputDate, { format: 'YYYYb' });
      default:
        return getYear(inputDate);
    }
  });

  return formattedDate;
}
