const { getYear } = require('../umd/bangla-calendar');

const now = new Date('August 16 2019 06:22:03');

test(`converts ${now} to '১৪২৬'`, () => {
  expect(getYear(now)).toBe('১৪২৬');
});

test(`converts ${now} to '২৬'`, () => {
  expect(getYear(now, { format: 'YY' })).toBe('২৬');
});
