'use strict';

var __chunk_1 = require('./chunk-6bd89ad0.js');

const formatYear = function(year = 0, format = 'YYYY') {
  let y = year.toString();

  switch (format) {
    case 'YY':
      return __chunk_1.convertNumbers(y.substring(y.length - 2));
    default:
      return __chunk_1.convertNumbers(y);
  }
};

function getYear(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const format = options.format || 'YYYY';

  if (month < 3 || (month === 3 && day < 13)) {
    return formatYear(year - 594, format);
  }

  return formatYear(year - 593, format);
}

module.exports = getYear;
