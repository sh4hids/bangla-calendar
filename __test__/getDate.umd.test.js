const { getDate } = require('../umd/bangla-calendar');

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');
const date3 = 'evildate';
const date4 = new Date('March 14 2020 06:22:03');
const date5 = new Date('March 15 2020 06:22:03');
const date6 = new Date('March 14 2021 06:22:03');
const date7 = new Date('March 15 2021 06:22:03');

test(`converts ${date1} to 'শুক্রবার, ১ ভাদ্র, ১৪২৬'`, () => {
  expect(getDate(date1)).toBe('শুক্রবার, ১ ভাদ্র, ১৪২৬');
});

test(`converts ${date1} to '০১/০৫/১৪২৬'`, () => {
  expect(getDate(date1, { format: 'DD/MM/YYYY' })).toBe('০১/০৫/১৪২৬');
});

test(`converts ${date1} to '০১/০৫/২৬'`, () => {
  expect(getDate(date1, { format: 'DD/MM/YY' })).toBe('০১/০৫/২৬');
});

test(`converts ${date2} to '৩০/১১/১৪২৬'`, () => {
  expect(getDate(date2, { format: 'DD/MM/YYYY' })).toBe('৩০/১১/১৪২৬');
});

test(`converts ${date2} to 'শনিবার, ৩০/১১/১৪২৬'`, () => {
  expect(getDate(date2, { format: 'eeee, DD/MM/YYYY' })).toBe(
    'শনিবার, ৩০/১১/১৪২৬'
  );
});

test(`converts ${date3} to 'Invalid Date'`, () => {
  expect(getDate(date3, { format: 'DD' })).toBe('Invalid Date');
});

test(`converts ${date4} to 'শনিবার, ৩০/১১/১৪২৬'`, () => {
  expect(getDate(date4, { format: 'eeee, DD/MM/YYYY' })).toBe(
    'শনিবার, ৩০/১১/১৪২৬'
  );
});

test(`converts ${date5} to 'রবিবার, ০১/১২/১৪২৬'`, () => {
  expect(getDate(date5, { format: 'eeee, DD/MM/YYYY' })).toBe(
    'রবিবার, ০১/১২/১৪২৬'
  );
});

test(`converts ${date6} to 'রবিবার, ২৯/১১/১৪২৭'`, () => {
  expect(getDate(date6, { format: 'eeee, DD/MM/YYYY' })).toBe(
    'রবিবার, ২৯/১১/১৪২৭'
  );
});

test(`converts ${date7} to 'সোমবার, ০১/১২/১৪২৭'`, () => {
  expect(getDate(date7, { format: 'eeee, DD/MM/YYYY' })).toBe(
    'সোমবার, ০১/১২/১৪২৭'
  );
});
