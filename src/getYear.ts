import { YearOptions } from './types';
import { errorMessage, formatYear, isLeapYear, isValidDate } from './utils';

export function getYear(
  date: Date = new Date(),
  options: YearOptions = { format: 'YYYY', calculationMethod: 'BD' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);

  const day = inputDate.getUTCDate();
  const month = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const { format, calculationMethod = 'BD' } = options;

  let result = formatYear(year - 593, format);

  if (
    isLeapYear(year) &&
    (month < 3 ||
      (calculationMethod === 'BD' && month === 3 && day < 14) ||
      (calculationMethod === 'IN' && month === 3 && day < 14))
  ) {
    result = formatYear(year - 594, format);
  }

  if (
    !isLeapYear(year) &&
    (month < 3 ||
      (calculationMethod === 'BD' && month === 3 && day < 14) ||
      (calculationMethod === 'IN' && month === 3 && day < 15))
  ) {
    result = formatYear(year - 594, format);
  }

  return result;
}
