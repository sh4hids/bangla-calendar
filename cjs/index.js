'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6bd89ad0.js');
var getDay = require('./getDay.js');
var getMonth = require('./getMonth.js');
var getYear = require('./getYear.js');

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

exports.getDay = getDay;
exports.getMonth = getMonth;
exports.getYear = getYear;
exports.getDate = getDate;
