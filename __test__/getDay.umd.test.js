const { getDay } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');

test(`converts ${date1} to '১'`, () => {
  expect(getDay(date1)).toBe('১');
});

test(`converts ${date1} to '০১'`, () => {
  expect(getDay(date1, { format: 'DD' })).toBe('০১');
});

test(`converts ${date2} to '৩১'`, () => {
  expect(getDay(date2)).toBe('৩১');
});

test(`converts ${date2} to '৩১'`, () => {
  expect(getDay(date2, { format: 'DD' })).toBe('৩১');
});
