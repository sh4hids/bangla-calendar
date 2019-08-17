'use strict';

var __chunk_1 = require('./chunk-6bd89ad0.js');

const formatMonth = function(month = 0, format = 'MMMM') {
  let m = (month + 1).toString();
  switch (format) {
    case 'M':
      return __chunk_1.convertNumbers(m);
    case 'MM':
      m = m.length === 1 ? `0${m}` : m;
      return __chunk_1.convertNumbers(m);
    default:
      return __chunk_1.banglaMonths[month];
  }
};

function getMonth(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const format = options.format || 'MMMM';

  if ((month === 3 && day > 13) || (month === 4 && day < 15)) {
    return formatMonth(0, format);
  }

  if ((month === 4 && day > 14) || (month === 5 && day < 15)) {
    return formatMonth(1, format);
  }

  if ((month === 5 && day > 14) || (month === 6 && day < 16)) {
    return formatMonth(2, format);
  }

  if ((month === 6 && day > 15) || (month === 7 && day < 16)) {
    return formatMonth(3, format);
  }

  if ((month === 7 && day > 15) || (month === 8 && day < 16)) {
    return formatMonth(4, format);
  }

  if ((month === 8 && day > 15) || (month === 9 && day < 16)) {
    return formatMonth(5, format);
  }

  if ((month === 9 && day > 15) || (month === 10 && day < 15)) {
    return formatMonth(6, format);
  }

  if ((month === 10 && day > 14) || (month === 11 && day < 15)) {
    return formatMonth(7, format);
  }

  if ((month === 11 && day > 14) || (month === 0 && day < 14)) {
    return formatMonth(8, format);
  }

  if ((month === 0 && day > 13) || (month === 1 && day < 13)) {
    return formatMonth(9, format);
  }

  if ((month === 1 && day > 12) || (month === 2 && day < 15)) {
    return formatMonth(10, format);
  }

  if ((month === 2 && day > 14) || (month === 3 && day < 14)) {
    return formatMonth(11, format);
  }
}

module.exports = getMonth;
