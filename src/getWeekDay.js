import { banglaWeekDays, isValidDate, errorMessage } from './utils';

const formatDay = function(day = 0, format = 'eeee') {
  switch (format) {
    case 'eee':
      return banglaWeekDays[day];
    default:
      return `${banglaWeekDays[day]}বার`;
  }
};

export default function(date = new Date(), options = {}) {
  if (!isValidDate(date)) return errorMessage;

  date = new Date(date);
  const day = date.getDay();
  const format = options.format || 'eeee';
  return formatDay(day, format);
}
