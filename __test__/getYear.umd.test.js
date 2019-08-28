const { getYear } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('April 13 2019 06:22:03');
const date3 = new Date('April 14 2020 06:22:03');
const date4 = 'xyzdate';

test(`converts ${date1} to '১৪২৬'`, () => {
  expect(getYear(date1)).toBe('১৪২৬');
});

test(`converts ${date1} to '২৬'`, () => {
  expect(getYear(date1, { format: 'YY' })).toBe('২৬');
});

test(`converts ${date2} to '১৪২৫'`, () => {
  expect(getYear(date2)).toBe('১৪২৫');
});

test(`converts ${date2} to '২৫'`, () => {
  expect(getYear(date2, { format: 'YY' })).toBe('২৫');
});

test(`converts ${date3} to '১৪২৭'`, () => {
  expect(getYear(date3)).toBe('১৪২৭');
});

test(`converts ${date3} to '২৭'`, () => {
  expect(getYear(date3, { format: 'YY' })).toBe('২৭');
});

test(`converts ${date4} to 'Invalid Date'`, () => {
  expect(getYear(date4, { format: 'DD' })).toBe('Invalid Date');
});
