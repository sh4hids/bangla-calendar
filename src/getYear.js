import { convertNumbers, isValidDate, errorMessage } from './utils';

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

export default function(date = new Date(), options = {}) {
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
