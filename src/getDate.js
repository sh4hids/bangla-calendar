import { isValidDate, errorMessage } from './utils';
import getDay from './getDay';
import getMonth from './getMonth';
import getYear from './getYear';
import getWeekDay from './getWeekDay';

export default function (date = new Date(), options = {}) {
  if (!isValidDate(date)) return errorMessage;

  date = new Date(date);
  const format = options.format || 'eeee, D MMMM, YYYY';

  let formattedDate = format.replace(/eeee|eee/gi, (fmt) => {
    switch (fmt) {
      case 'eee':
        return getWeekDay(date, { format: 'eee' });
      default:
        return getWeekDay(date);
    }
  });

  formattedDate = formattedDate.replace(/DD|D/gi, (fmt) => {
    switch (fmt) {
      case 'DD':
        return getDay(date, { format: 'DD' });
      default:
        return getDay(date);
    }
  });

  formattedDate = formattedDate.replace(/MMMM|MM|M/gi, (fmt) => {
    switch (fmt) {
      case 'M':
        return getMonth(date, { format: 'M' });
      case 'MM':
        return getMonth(date, { format: 'MM' });
      default:
        return getMonth(date);
    }
  });

  formattedDate = formattedDate.replace(/YYYYb|YYYY|YY/gi, (fmt) => {
    switch (fmt) {
      case 'YY':
        return getYear(date, { format: 'YY' });
      case 'YYYYb':
        return getYear(date, { format: 'YYYYb' });
      default:
        return getYear(date);
    }
  });

  return formattedDate;
}
