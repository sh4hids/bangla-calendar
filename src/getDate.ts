import { getDay } from './getDay';
import { getMonth } from './getMonth';
import { getWeekDay } from './getWeekDay';
import { getYear } from './getYear';
import { DateOptions } from './types';
import { errorMessage, isValidDate } from './utils';

export function getDate(
  date: Date = new Date(),
  options: DateOptions = {
    format: 'eeee, D MMMM, YYYY',
    calculationMethod: 'BD',
  }
) {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);
  const { format = 'eeee, D MMMM, YYYY', calculationMethod = 'BD' } = options;

  let formattedDate = format.replace(/eeee|eee/gi, (fmt) => {
    switch (fmt) {
      case 'eee':
        return getWeekDay(inputDate, { format: 'eee', calculationMethod });
      default:
        return getWeekDay(inputDate, { calculationMethod });
    }
  });

  formattedDate = formattedDate.replace(/DD|D/gi, (fmt) => {
    switch (fmt) {
      case 'DD':
        return getDay(inputDate, { format: 'DD', calculationMethod });
      default:
        return getDay(inputDate, { calculationMethod });
    }
  });

  formattedDate = formattedDate.replace(/MMMM|MM|M/gi, (fmt) => {
    switch (fmt) {
      case 'M':
        return getMonth(inputDate, { format: 'M', calculationMethod });
      case 'MM':
        return getMonth(inputDate, { format: 'MM', calculationMethod });
      default:
        return getMonth(inputDate, { calculationMethod });
    }
  });

  formattedDate = formattedDate.replace(/YYYYb|YYYY|YY/gi, (fmt) => {
    switch (fmt) {
      case 'YY':
        return getYear(inputDate, { format: 'YY', calculationMethod });
      case 'YYYYb':
        return getYear(inputDate, { format: 'YYYYb', calculationMethod });
      default:
        return getYear(inputDate, { calculationMethod });
    }
  });

  return formattedDate;
}
