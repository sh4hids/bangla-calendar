import { a as banglaWeekDays } from './utils-e17fcddf.js';
import getDay from './getDay.js';
export { default as getDay } from './getDay.js';
import getMonth from './getMonth.js';
export { default as getMonth } from './getMonth.js';
import getYear from './getYear.js';
export { default as getYear } from './getYear.js';

function getDate(date = new Date(), options = {}) {
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

  formattedDate = formattedDate.replace(/YYYYb|YYYY|YY/gi, fmt => {
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

const formatDay = function(day = 0, format = 'eeee') {
  switch (format) {
    case 'eee':
      return banglaWeekDays[day];
    default:
      return `${banglaWeekDays[day]}বার`;
  }
};

function getWeekDay(date = new Date(), options = {}) {
  const day = date.getDay();
  const format = options.format || 'eeee';
  return formatDay(day, format);
}

export { getDate, getWeekDay };
