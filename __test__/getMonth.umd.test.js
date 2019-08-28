const { getMonth } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 15 2020 06:22:03');
const date3 = 'fakedate';

test(`converts ${date1} to 'ভাদ্র'`, () => {
  expect(getMonth(date1)).toBe('ভাদ্র');
});

test(`converts ${date1} to '০৫'`, () => {
  expect(getMonth(date1, { format: 'MM' })).toBe('০৫');
});

test(`converts ${date1} to '৫'`, () => {
  expect(getMonth(date1, { format: 'M' })).toBe('৫');
});

test(`converts ${date2} to 'চৈত্র'`, () => {
  expect(getMonth(date2)).toBe('চৈত্র');
});

test(`converts ${date2} to '১২'`, () => {
  expect(getMonth(date2, { format: 'MM' })).toBe('১২');
});

test(`converts ${date2} to '১২'`, () => {
  expect(getMonth(date2, { format: 'M' })).toBe('১২');
});

test(`converts ${date3} to 'Invalid Date'`, () => {
  expect(getMonth(date3, { format: 'DD' })).toBe('Invalid Date');
});
