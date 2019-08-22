'use strict';

var utils = require('./utils-b414064a.js');

const formatYear = function(year = 0, format = 'YYYY') {
  let y = year.toString();

  switch (format) {
    case 'YY':
      return utils.convertNumbers(y.substring(y.length - 2));
    case 'YYYYb':
      return `${utils.convertNumbers(y)} (বঙ্গাব্দ)`;
    default:
      return utils.convertNumbers(y);
  }
};

function getYear(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const format = options.format || 'YYYY';

  if (month < 3 || (month === 3 && day < 14)) {
    return formatYear(year - 594, format);
  }

  return formatYear(year - 593, format);
}

module.exports = getYear;
