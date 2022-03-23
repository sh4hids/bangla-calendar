import { MonthOptions } from './types';
import { errorMessage, formatMonth, isValidDate } from './utils';

export function getMonth(
  date: Date = new Date(),
  options: MonthOptions = { format: 'MMMM' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);

  let result: string;
  const day = inputDate.getUTCDate();
  const month = inputDate.getMonth();
  const { format } = options;

  switch (true) {
    case (month === 4 && day > 14) || (month === 5 && day < 15):
      result = formatMonth(1, format);
      break;
    case (month === 5 && day > 14) || (month === 6 && day < 16):
      result = formatMonth(2, format);
      break;
    case (month === 6 && day > 15) || (month === 7 && day < 16):
      result = formatMonth(3, format);
      break;
    case (month === 7 && day > 15) || (month === 8 && day < 16):
      result = formatMonth(4, format);
      break;
    case (month === 8 && day > 15) || (month === 9 && day < 16):
      result = formatMonth(5, format);
      break;
    case (month === 9 && day > 15) || (month === 10 && day < 15):
      result = formatMonth(6, format);
      break;
    case (month === 10 && day > 14) || (month === 11 && day < 15):
      result = formatMonth(7, format);
      break;
    case (month === 11 && day > 14) || (month === 0 && day < 14):
      result = formatMonth(8, format);
      break;
    case (month === 0 && day > 13) || (month === 1 && day < 14):
      result = formatMonth(9, format);
      break;
    case (month === 1 && day > 13) || (month === 2 && day < 15):
      result = formatMonth(10, format);
      break;
    case (month === 2 && day > 14) || (month === 3 && day < 14):
      result = formatMonth(11, format);
      break;
    default:
      result = formatMonth(0, format);
      break;
  }

  return result;
}
