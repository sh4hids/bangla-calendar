const { getDay } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');
const date3 = 'notadate';
const date4 = new Date('March 14 2020 06:22:03');
const date5 = new Date('March 14 2021 06:22:03');

test(`converts ${date1} to '১'`, () => {
  expect(getDay(date1)).toBe('১');
});

test(`converts ${date1} to '০১'`, () => {
  expect(getDay(date1, { format: 'DD' })).toBe('০১');
});

test(`converts ${date2} to '৩০'`, () => {
  expect(getDay(date2)).toBe('৩০');
});

test(`converts ${date2} to '৩০'`, () => {
  expect(getDay(date2, { format: 'DD' })).toBe('৩০');
});

test(`converts ${date3} to 'Invalid Date'`, () => {
  expect(getDay(date3, { format: 'DD' })).toBe('Invalid Date');
});

test(`converts ${date4} to '৩০'`, () => {
  expect(getDay(date4, { format: 'DD' })).toBe('৩০');
});

test(`converts ${date5} to '২৯'`, () => {
  expect(getDay(date5, { format: 'DD' })).toBe('২৯');
});
