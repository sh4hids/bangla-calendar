const { getDate } = require('../umd/bangla-calendar');

const now = new Date('August 16 2019 06:22:03');

test(`converts ${now} to '১ ভাদ্র, ১৪২৬'`, () => {
  expect(getDate(now)).toBe('১ ভাদ্র, ১৪২৬');
});

test(`converts ${now} to '০১/০৫/১৪২৬'`, () => {
  expect(getDate(now, { format: 'DD/MM/YYYY' })).toBe('০১/০৫/১৪২৬');
});

test(`converts ${now} to '০১/০৫/২৬'`, () => {
  expect(getDate(now, { format: 'DD/MM/YY' })).toBe('০১/০৫/২৬');
});
