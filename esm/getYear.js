import { i as isValidDate, e as errorMessage, c as convertNumbers } from './utils-cd7bcc7e.js';

const formatYear = function(year = 0, format = 'YYYY') {
  let y = year.toString();

  switch (format) {
    case 'YY':
      return convertNumbers(y.substring(y.length - 2));
    case 'YYYYb':
      return `${convertNumbers(y)} (বঙ্গাব্দ)`;
    default:
      return convertNumbers(y);
  }
};

function getYear(date = new Date(), options = {}) {
  if (!isValidDate(date)) return errorMessage;

  date = new Date(date);
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const format = options.format || 'YYYY';

  if (month < 3 || (month === 3 && day < 14)) {
    return formatYear(year - 594, format);
  }

  return formatYear(year - 593, format);
}

export default getYear;
