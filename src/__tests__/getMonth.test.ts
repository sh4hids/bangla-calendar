import { getMonth } from '../getMonth';

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 15 2020 06:22:03');
const date3 = new Date('fakedate');
const date4 = new Date('January 19 2022 06:22:03');
const date5 = new Date('February 13 2022 06:22:03');
const date6 = new Date('July 17 2021 06:22:03');
const date7 = new Date('April 14 2022 06:22:03');

const april13 = new Date('April 13 2021 06:22:03');
const april14 = new Date('April 14 2021 06:22:03');
const april15 = new Date('April 15 2021 06:22:03');

const may14 = new Date('May 14 2021 06:22:03');
const may15 = new Date('May 15 2021 06:22:03');
const may16 = new Date('May 16 2021 06:22:03');

const june14 = new Date('June 14 2021 06:22:03');
const june15 = new Date('June 15 2021 06:22:03');
const june16 = new Date('June 16 2021 06:22:03');

const july15 = new Date('July 15 2021 06:22:03');
const july16 = new Date('July 16 2021 06:22:03');
const july18 = new Date('July 18 2021 06:22:03');

test(`converts ${april13} to 'চৈত্র'`, () => {
  expect(getMonth(april13)).toBe('চৈত্র');
});

test(`converts ${april13} to 'চৈত্র'`, () => {
  expect(getMonth(april13, { calculationMethod: 'IN' })).toBe('চৈত্র');
});

test(`converts ${april14} to 'বৈশাখ'`, () => {
  expect(getMonth(april14)).toBe('বৈশাখ');
});

test(`converts ${april14} to 'চৈত্র'`, () => {
  expect(getMonth(april14, { calculationMethod: 'IN' })).toBe('চৈত্র');
});

test(`converts ${april15} to 'বৈশাখ'`, () => {
  expect(getMonth(april15)).toBe('বৈশাখ');
});

test(`converts ${april15} to 'বৈশাখ'`, () => {
  expect(getMonth(april15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
});

test(`converts ${may14} to 'বৈশাখ'`, () => {
  expect(getMonth(may14)).toBe('বৈশাখ');
});

test(`converts ${may14} to 'বৈশাখ'`, () => {
  expect(getMonth(may14, { calculationMethod: 'IN' })).toBe('বৈশাখ');
});

test(`converts ${may15} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may15)).toBe('জ্যৈষ্ঠ');
});

test(`converts ${may15} to 'বৈশাখ'`, () => {
  expect(getMonth(may15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
});

test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may16)).toBe('জ্যৈষ্ঠ');
});

test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may16, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
});

test(`converts ${may14} to 'বৈশাখ'`, () => {
  expect(getMonth(may14)).toBe('বৈশাখ');
});

test(`converts ${may14} to 'বৈশাখ'`, () => {
  expect(getMonth(may14, { calculationMethod: 'IN' })).toBe('বৈশাখ');
});

test(`converts ${may15} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may15)).toBe('জ্যৈষ্ঠ');
});

test(`converts ${may15} to 'বৈশাখ'`, () => {
  expect(getMonth(may15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
});

test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may16)).toBe('জ্যৈষ্ঠ');
});

test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(may16, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
});

test(`converts ${june14} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(june14)).toBe('জ্যৈষ্ঠ');
});

test(`converts ${june14} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(june14, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
});

test(`converts ${june15} to 'আষাঢ়'`, () => {
  expect(getMonth(june15)).toBe('আষাঢ়');
});

test(`converts ${june15} to 'জ্যৈষ্ঠ'`, () => {
  expect(getMonth(june15, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
});

test(`converts ${june16} to 'আষাঢ়'`, () => {
  expect(getMonth(june16)).toBe('আষাঢ়');
});

test(`converts ${june16} to 'আষাঢ়'`, () => {
  expect(getMonth(june16, { calculationMethod: 'IN' })).toBe('আষাঢ়');
});

test(`converts ${july15} to 'আষাঢ়'`, () => {
  expect(getMonth(july15)).toBe('আষাঢ়');
});

test(`converts ${july15} to 'আষাঢ়'`, () => {
  expect(getMonth(july15, { calculationMethod: 'IN' })).toBe('আষাঢ়');
});

test(`converts ${july16} to 'শ্রাবণ'`, () => {
  expect(getMonth(july16)).toBe('শ্রাবণ');
});

test(`converts ${july16} to 'আষাঢ়'`, () => {
  expect(getMonth(july16, { calculationMethod: 'IN' })).toBe('আষাঢ়');
});

test(`converts ${july18} to 'শ্রাবণ'`, () => {
  expect(getMonth(july18)).toBe('শ্রাবণ');
});

test(`converts ${july18} to 'শ্রাবণ'`, () => {
  expect(getMonth(july18, { calculationMethod: 'IN' })).toBe('শ্রাবণ');
});

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
  expect(getMonth(date3, { format: 'MM' })).toBe('Invalid Date');
});

test(`converts ${date4} to 'মাঘ'`, () => {
  expect(getMonth(date4, { format: 'MMMM' })).toBe('মাঘ');
});

test(`converts ${date5} to 'মাঘ'`, () => {
  expect(getMonth(date5, { format: 'MMMM' })).toBe('মাঘ');
});

test(`converts ${date6} to 'শ্রাবণ'`, () => {
  expect(getMonth(date6, { format: 'MMMM' })).toBe('শ্রাবণ');
});

test(`converts ${date6} to 'আষাঢ়'`, () => {
  expect(getMonth(date6, { format: 'MMMM', calculationMethod: 'IN' })).toBe(
    'আষাঢ়'
  );
});

test(`converts ${date7} to 'চৈত্র'`, () => {
  expect(getMonth(date7, { format: 'MMMM', calculationMethod: 'IN' })).toBe(
    'চৈত্র'
  );
});
