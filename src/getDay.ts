import { DayOptions } from './types';
import { errorMessage, formatDay, isLeapYear, isValidDate } from './utils';

function getDayBD(day: number, month: number, year: number): number {
  let banglaDay: number;
  switch (month) {
    case 0:
      banglaDay = day < 15 ? day + 16 : day - 14;
      break;
    case 1:
      banglaDay = day < 14 ? day + 17 : day - 13;
      break;
    case 2:
      if (isLeapYear(year)) {
        banglaDay = day < 15 ? day + 16 : day - 14;
      } else {
        banglaDay = day < 15 ? day + 15 : day - 14;
      }
      break;
    case 3:
      banglaDay = day < 14 ? day + 17 : day - 13;
      break;
    case 4:
      banglaDay = day < 15 ? day + 17 : day - 14;
      break;
    case 5:
      banglaDay = day < 15 ? day + 17 : day - 14;
      break;
    case 6:
      banglaDay = day < 16 ? day + 16 : day - 15;
      break;
    case 7:
      banglaDay = day < 16 ? day + 16 : day - 15;
      break;
    case 8:
      banglaDay = day < 16 ? day + 16 : day - 15;
      break;
    case 9:
      banglaDay = day < 17 ? day + 15 : day - 16;
      break;
    case 10:
      banglaDay = day < 16 ? day + 15 : day - 15;
      break;
    default:
      banglaDay = day < 16 ? day + 15 : day - 15;
      break;
  }
  return banglaDay;
}

function getDayIN(day: number, month: number, year: number): number {
  let banglaDay: number;
  switch (month) {
    case 0:
      banglaDay = day < 16 ? day + 15 : day - 15;
      break;
    case 1:
      banglaDay = day < 14 ? day + 16 : day - 13;
      break;
    case 2:
      if (isLeapYear(year)) {
        banglaDay = day < 15 ? day + 16 : day - 14;
      } else {
        banglaDay = day < 16 ? day + 15 : day - 15;
      }
      break;
    case 3:
      if (isLeapYear(year)) {
        banglaDay = day < 14 ? day + 17 : day - 13;
      } else {
        banglaDay = day < 15 ? day + 16 : day - 14;
      }
      break;
    case 4:
      banglaDay = day < 16 ? day + 16 : day - 15;
      break;
    case 5:
      banglaDay = day < 16 ? day + 16 : day - 15;
      break;
    case 6:
      banglaDay = day < 18 ? day + 15 : day - 17;
      break;
    case 7:
      banglaDay = day < 18 ? day + 14 : day - 17;
      break;
    case 8:
      banglaDay = day < 18 ? day + 14 : day - 17;
      break;
    case 9:
      banglaDay = day < 19 ? day + 13 : day - 18;
      break;
    case 10:
      banglaDay = day < 18 ? day + 13 : day - 17;
      break;
    case 11:
      banglaDay = day < 17 ? day + 13 : day - 16;
      break;
    default:
      banglaDay = day < 15 ? day + 16 : day - 14;
      break;
  }
  return banglaDay;
}

export function getDay(
  date: Date = new Date(),
  options: DayOptions = { format: 'D', calculationMethod: 'BD' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);

  const day = inputDate.getUTCDate();
  const month = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const { format, calculationMethod = 'BD' } = options;
  const banglaDay =
    calculationMethod === 'BD'
      ? getDayBD(day, month, year)
      : getDayIN(day, month, year);
  const result = formatDay(banglaDay, format);

  return result;
}
