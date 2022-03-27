import { getYear } from '../getYear';

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('April 13 2019 06:22:03');
const date3 = new Date('April 14 2020 06:22:03');
const date4 = new Date('xyzdate');

const april14 = new Date('April 14 2021 06:22:03');

test(`converts ${april14} to '১৪২৮'`, () => {
  expect(getYear(april14)).toBe('১৪২৮');
});

test(`converts ${april14} to '১৪২৭'`, () => {
  expect(getYear(april14, { calculationMethod: 'IN' })).toBe('১৪২৭');
});

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
  expect(getYear(date4, { format: 'YY' })).toBe('Invalid Date');
});
