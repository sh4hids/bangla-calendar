const { getDate } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');

test(`converts ${date1} to '১ ভাদ্র, ১৪২৬'`, () => {
  expect(getDate(date1)).toBe('১ ভাদ্র, ১৪২৬');
});

test(`converts ${date1} to '০১/০৫/১৪২৬'`, () => {
  expect(getDate(date1, { format: 'DD/MM/YYYY' })).toBe('০১/০৫/১৪২৬');
});

test(`converts ${date1} to '০১/০৫/২৬'`, () => {
  expect(getDate(date1, { format: 'DD/MM/YY' })).toBe('০১/০৫/২৬');
});

test(`converts ${date2} to '৩১/১১/১৪২৬'`, () => {
  expect(getDate(date2, { format: 'DD/MM/YYYY' })).toBe('৩১/১১/১৪২৬');
});
