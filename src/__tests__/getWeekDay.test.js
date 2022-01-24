import getWeekDay from '../getWeekDay';

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');
const date3 = 'notaweek';

test(`converts ${date1} to 'শুক্রবার'`, () => {
  expect(getWeekDay(date1)).toBe('শুক্রবার');
});

test(`converts ${date1} to 'শুক্র'`, () => {
  expect(getWeekDay(date1, { format: 'eee' })).toBe('শুক্র');
});

test(`converts ${date2} to 'শনিবার'`, () => {
  expect(getWeekDay(date2)).toBe('শনিবার');
});

test(`converts ${date2} to 'শনি'`, () => {
  expect(getWeekDay(date2, { format: 'eee' })).toBe('শনি');
});

test(`converts ${date3} to 'Invalid Date'`, () => {
  expect(getWeekDay(date3, { format: 'DD' })).toBe('Invalid Date');
});
