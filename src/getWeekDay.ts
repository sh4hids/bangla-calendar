import { WeekDayOptions } from './types';
import { errorMessage, formatWeekDay, isValidDate } from './utils';

export function getWeekDay(
  date: Date = new Date(),
  options: WeekDayOptions = { format: 'eeee' }
): string {
  if (!isValidDate(date)) return errorMessage;

  const inputDate = new Date(date);
  const day = inputDate.getDay();
  return formatWeekDay(day, options.format);
}
