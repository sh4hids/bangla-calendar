import { YearOptions } from './types';
import { errorMessage, formatYear, isValidDate } from './utils';

export function getYear(
  date: Date = new Date(),
  options: YearOptions = { format: 'YYYY' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);

  const day = inputDate.getUTCDate();
  const month = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const { format } = options;

  let result = formatYear(year - 593, format);

  if (month < 3 || (month === 3 && day < 14)) {
    result = formatYear(year - 594, format);
  }

  return result;
}
