import { DayFormat, MonthFormat, WeekDayFormat, YearFormat } from './types';

export const convertNumbers = (data): string => {
  const numbers = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
    '.': '.',
    '-': '-',
  };
  let result = '';

  if (!data) {
    return '';
  }

  const input = data.toString();
  const { length } = input;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    if (Number.isNaN(parseFloat(input[i])) || Number.isNaN(input[i] - 0)) {
      result += input[i];
    } else {
      result += numbers[input[i]];
    }
  }
  return result;
};

export const banglaMonths = [
  'বৈশাখ',
  'জ্যৈষ্ঠ',
  'আষাঢ়',
  'শ্রাবণ',
  'ভাদ্র',
  'আশ্বিন',
  'কার্তিক',
  'অগ্রহায়ণ',
  'পৌষ',
  'মাঘ',
  'ফাল্গুন',
  'চৈত্র',
];

export const banglaWeekDays = [
  'রবি',
  'সোম',
  'মঙ্গল',
  'বুধ',
  'বৃহস্পতি',
  'শুক্র',
  'শনি',
];

export const isLeapYear = (year: number = 0): boolean =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

export const isValidDate = (date: any): boolean => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(date)) {
      return false;
    }
    return true;
  }
  return false;
};

export const formatDay = (day: number = 1, format: DayFormat = 'D'): string => {
  let d = day.toString();

  switch (format) {
    case 'DD':
      d = d.length === 1 ? `0${d}` : d;
      return convertNumbers(d);
    default:
      return convertNumbers(day);
  }
};

export const formatWeekDay = (
  day: number = 0,
  format: WeekDayFormat = 'eeee'
): string => {
  switch (format) {
    case 'eee':
      return banglaWeekDays[day];
    default:
      return `${banglaWeekDays[day]}বার`;
  }
};

export const formatMonth = (
  month: number = 0,
  format: MonthFormat = 'MMMM'
): string => {
  let m = (month + 1).toString();
  switch (format) {
    case 'M':
      return convertNumbers(m);
    case 'MM':
      m = m.length === 1 ? `0${m}` : m;
      return convertNumbers(m);
    default:
      return banglaMonths[month];
  }
};

export const formatYear = (
  year: number = 0,
  format: YearFormat = 'YYYY'
): string => {
  const y = year.toString();

  switch (format) {
    case 'YY':
      return convertNumbers(y.substring(y.length - 2));
    case 'YYYYb':
      return `${convertNumbers(y)} (বঙ্গাব্দ)`;
    default:
      return convertNumbers(y);
  }
};

export const errorMessage = 'Invalid Date';
