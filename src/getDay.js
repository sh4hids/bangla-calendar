import { convertNumbers, isLeapYear, isValidDate, errorMessage } from './utils';

const formatDay = function(day = 1, format = 'D') {
  let d = day.toString();

  switch (format) {
    case 'DD':
      d = d.length === 1 ? `0${d}` : d;
      return convertNumbers(d);
    default:
      return convertNumbers(day);
  }
};

export default function(date = new Date(), options = {}) {
  if (!isValidDate(date)) return errorMessage;

  date = new Date(date);
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const format = options.format || 'D';

  if (month === 0) {
    return day < 14 ? formatDay(day + 17, format) : formatDay(day - 13, format);
  }

  if (month === 1) {
    return day < 13 ? formatDay(day + 18, format) : formatDay(day - 12, format);
  }

  if (month === 2) {
    return day < 15
      ? isLeapYear(year)
        ? formatDay(day + 16, format)
        : formatDay(day + 15, format)
      : formatDay(day - 14, format);
  }

  if (month === 3) {
    return day < 14 ? formatDay(day + 17, format) : formatDay(day - 13, format);
  }

  if (month === 4) {
    return day < 15 ? formatDay(day + 17, format) : formatDay(day - 14, format);
  }

  if (month === 5) {
    return day < 15 ? formatDay(day + 17, format) : formatDay(day - 14, format);
  }

  if (month === 6) {
    return day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
  }

  if (month === 7) {
    return day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
  }

  if (month === 8) {
    return day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
  }

  if (month === 9) {
    return day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
  }

  if (month === 10) {
    return day < 15 ? formatDay(day + 16, format) : formatDay(day - 14, format);
  }

  if (month === 11) {
    return day < 15 ? formatDay(day + 16, format) : formatDay(day - 14, format);
  }
}
