import { DayOptions } from './types';
import { errorMessage, formatDay, isLeapYear, isValidDate } from './utils';

export function getDay(
  date: Date = new Date(),
  options: DayOptions = { format: 'D' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);

  let result: string;
  const day = inputDate.getUTCDate();
  const month = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const { format } = options;

  switch (month) {
    case 0:
      result =
        day < 14 ? formatDay(day + 16, format) : formatDay(day - 14, format);
      break;
    case 1:
      result =
        day < 14 ? formatDay(day + 17, format) : formatDay(day - 13, format);
      break;
    case 2:
      if (day < 15) {
        if (isLeapYear(year)) {
          result = formatDay(day + 16, format);
        } else {
          result = formatDay(day + 15, format);
        }
      } else {
        result = formatDay(day - 14, format);
      }
      break;
    case 3:
      result =
        day < 14 ? formatDay(day + 17, format) : formatDay(day - 13, format);
      break;
    case 4:
      result =
        day < 15 ? formatDay(day + 17, format) : formatDay(day - 14, format);
      break;
    case 5:
      result =
        day < 15 ? formatDay(day + 17, format) : formatDay(day - 14, format);
      break;
    case 6:
      result =
        day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
      break;
    case 7:
      result =
        day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
      break;
    case 8:
      result =
        day < 16 ? formatDay(day + 16, format) : formatDay(day - 15, format);
      break;
    case 9:
      result =
        day < 16 ? formatDay(day + 15, format) : formatDay(day - 16, format);
      break;
    case 10:
      result =
        day < 15 ? formatDay(day + 15, format) : formatDay(day - 15, format);
      break;
    default:
      result =
        day < 15 ? formatDay(day + 15, format) : formatDay(day - 15, format);
      break;
  }

  return result;
}
