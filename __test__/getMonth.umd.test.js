const { getMonth } = require('../umd/bangla-calendar');

const now = new Date('August 16 2019 06:22:03');

test(`converts ${now} to 'ভাদ্র'`, () => {
  expect(getMonth(now)).toBe('ভাদ্র');
});

test(`converts ${now} to '০৫'`, () => {
  expect(getMonth(now, { format: 'MM' })).toBe('০৫');
});

test(`converts ${now} to '৫'`, () => {
  expect(getMonth(now, { format: 'M' })).toBe('৫');
});
