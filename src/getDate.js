import { convertNumbers } from './utils';
import getDay from './getDay';
import getMonth from './getMonth';
import getYear from './getYear';

export default function(date = new Date(), options = {}) {
  const format = options.format || 'D MMMM, YYYY';

  let formattedDate = format.replace(/DD|D/gi, fmt => {
    switch (fmt) {
      case 'DD':
        return getDay(date, { format: 'DD' });
      default:
        return getDay(date);
    }
  });

  formattedDate = formattedDate.replace(/MMMM|MM|M/gi, fmt => {
    switch (fmt) {
      case 'M':
        return getMonth(date, { format: 'M' });
      case 'MM':
        return getMonth(date, { format: 'MM' });
      default:
        return getMonth(date);
    }
  });

  formattedDate = formattedDate.replace(/YYYY|YY/gi, fmt => {
    switch (fmt) {
      case 'YY':
        return getYear(date, { format: 'YY' });
      default:
        return getYear(date);
    }
  });

  return formattedDate;
}
