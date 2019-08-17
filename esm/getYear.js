import { b as convertNumbers } from './chunk-98e7b05c.js';

const formatYear = function(year = 0, format = 'YYYY') {
  let y = year.toString();

  switch (format) {
    case 'YY':
      return convertNumbers(y.substring(y.length - 2));
    default:
      return convertNumbers(y);
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

export default getYear;
