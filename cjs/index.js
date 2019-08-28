'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils-3878e12f.js');
var getDay = require('./getDay.js');
var getMonth = require('./getMonth.js');
var getYear = require('./getYear.js');

const formatDay = function(day = 0, format = 'eeee') {
  switch (format) {
    case 'eee':
      return utils.banglaWeekDays[day];
    default:
      return `${utils.banglaWeekDays[day]}বার`;
  }
};

function getWeekDay(date = new Date(), options = {}) {
  if (!utils.isValidDate(date)) return utils.errorMessage;

  date = new Date(date);
  const day = date.getDay();
  const format = options.format || 'eeee';
  return formatDay(day, format);
}

function getDate(date = new Date(), options = {}) {
  if (!utils.isValidDate(date)) return utils.errorMessage;

  date = new Date(date);
  const format = options.format || 'eeee, D MMMM, YYYY';

  let formattedDate = format.replace(/eeee|eee/gi, fmt => {
    switch (fmt) {
      case 'eee':
        return getWeekDay(date, { format: 'eee' });
      default:
        return getWeekDay(date);
    }
  });

  formattedDate = formattedDate.replace(/DD|D/gi, fmt => {
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
exports.getWeekDay = getWeekDay;
