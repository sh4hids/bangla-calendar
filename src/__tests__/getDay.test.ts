import { getDay } from '../getDay';

const date1 = new Date('August 16 2019 06:22:03');
const date2 = new Date('March 14 2020 06:22:03');
const date3 = new Date('March 54 2020 06:22:03');
const date4 = new Date('March 14 2020 06:22:03');
const date5 = new Date('March 14 2021 06:22:03');
const date6 = new Date('January 19 2022 06:22:03');
const date7 = new Date('February 13 2022 06:22:03');
const date8 = new Date('July 17 2022 06:22:03');

const march28 = new Date('March 28 2022 06:22:03');

const april13 = new Date('April 13 2022 06:22:03');
const april14 = new Date('April 14 2022 06:22:03');
const april15 = new Date('April 15 2022 06:22:03');

const may14 = new Date('May 14 2022 06:22:03');
const may15 = new Date('May 15 2022 06:22:03');
const may16 = new Date('May 16 2022 06:22:03');

const june14 = new Date('June 14 2022 06:22:03');
const june15 = new Date('June 15 2022 06:22:03');
const june16 = new Date('June 16 2022 06:22:03');

const july14 = new Date('July 14 2022 06:22:03');
const july15 = new Date('July 15 2022 06:22:03');
const july17 = new Date('July 17 2022 06:22:03');
const july18 = new Date('July 18 2022 06:22:03');

const august15 = new Date('August 15 2022 06:22:03');
const august16 = new Date('August 16 2022 06:22:03');
const august17 = new Date('August 17 2022 06:22:03');
const august18 = new Date('August 18 2022 06:22:03');

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

test(`converts ${date6} to '০৫'`, () => {
  expect(getDay(date6, { format: 'DD' })).toBe('০৫');
});

test(`converts ${date7} to '৩০'`, () => {
  expect(getDay(date7, { format: 'DD' })).toBe('৩০');
});

test(`converts ${date8} to '৩২'`, () => {
  expect(getDay(date8, { format: 'DD', calculationMethod: 'IN' })).toBe('৩২');
});

test(`converts ${date8} to '০২'`, () => {
  expect(getDay(date8, { format: 'DD', calculationMethod: 'BD' })).toBe('০২');
});

test(`converts ${march28} to '১৪'`, () => {
  expect(getDay(march28)).toBe('১৪');
});

test(`converts ${march28} to '১৩'`, () => {
  expect(getDay(march28, { calculationMethod: 'IN' })).toBe('১৩');
});

test(`converts ${april13} to '৩০'`, () => {
  expect(getDay(april13)).toBe('৩০');
});

test(`converts ${april13} to '২৯'`, () => {
  expect(getDay(april13, { calculationMethod: 'IN' })).toBe('২৯');
});

test(`converts ${april14} to '১'`, () => {
  expect(getDay(april14)).toBe('১');
});

test(`converts ${april14} to '৩০'`, () => {
  expect(getDay(april14, { calculationMethod: 'IN' })).toBe('৩০');
});

test(`converts ${april15} to '২'`, () => {
  expect(getDay(april15)).toBe('২');
});

test(`converts ${april15} to '১'`, () => {
  expect(getDay(april15, { calculationMethod: 'IN' })).toBe('১');
});

test(`converts ${may14} to '৩১'`, () => {
  expect(getDay(may14)).toBe('৩১');
});

test(`converts ${may14} to '৩০'`, () => {
  expect(getDay(may14, { calculationMethod: 'IN' })).toBe('৩০');
});

test(`converts ${may15} to '১'`, () => {
  expect(getDay(may15)).toBe('১');
});

test(`converts ${may15} to '৩১'`, () => {
  expect(getDay(may15, { calculationMethod: 'IN' })).toBe('৩১');
});

test(`converts ${may16} to '২'`, () => {
  expect(getDay(may16)).toBe('২');
});

test(`converts ${june14} to '৩১'`, () => {
  expect(getDay(june14)).toBe('৩১');
});

test(`converts ${june14} to '৩০'`, () => {
  expect(getDay(june14, { calculationMethod: 'IN' })).toBe('৩০');
});

test(`converts ${june15} to '১'`, () => {
  expect(getDay(june15)).toBe('১');
});

test(`converts ${june15} to '৩১'`, () => {
  expect(getDay(june15, { calculationMethod: 'IN' })).toBe('৩১');
});

test(`converts ${june16} to '২'`, () => {
  expect(getDay(june16)).toBe('২');
});

test(`converts ${june16} to '১'`, () => {
  expect(getDay(june16, { calculationMethod: 'IN' })).toBe('১');
});

test(`converts ${july14} to '৩০'`, () => {
  expect(getDay(july14)).toBe('৩০');
});

test(`converts ${july14} to '২৯'`, () => {
  expect(getDay(july14, { calculationMethod: 'IN' })).toBe('২৯');
});

test(`converts ${july15} to '৩১'`, () => {
  expect(getDay(july15)).toBe('৩১');
});

test(`converts ${july15} to '৩০'`, () => {
  expect(getDay(july15, { calculationMethod: 'IN' })).toBe('৩০');
});

test(`converts ${july17} to '২'`, () => {
  expect(getDay(july17)).toBe('২');
});

test(`converts ${july17} to '৩২'`, () => {
  expect(getDay(july17, { calculationMethod: 'IN' })).toBe('৩২');
});

test(`converts ${july18} to '৩'`, () => {
  expect(getDay(july18)).toBe('৩');
});

test(`converts ${july18} to '১'`, () => {
  expect(getDay(july18, { calculationMethod: 'IN' })).toBe('১');
});

test(`converts ${august15} to '৩১'`, () => {
  expect(getDay(august15)).toBe('৩১');
});

test(`converts ${august15} to '২৯'`, () => {
  expect(getDay(august15, { calculationMethod: 'IN' })).toBe('২৯');
});

test(`converts ${august16} to '১'`, () => {
  expect(getDay(august16)).toBe('১');
});

test(`converts ${august16} to '৩০'`, () => {
  expect(getDay(august16, { calculationMethod: 'IN' })).toBe('৩০');
});

test(`converts ${august17} to '২'`, () => {
  expect(getDay(august17)).toBe('২');
});

test(`converts ${august17} to '৩১'`, () => {
  expect(getDay(august17, { calculationMethod: 'IN' })).toBe('৩১');
});

test(`converts ${august18} to '৩'`, () => {
  expect(getDay(august18)).toBe('৩');
});

test(`converts ${august18} to '১'`, () => {
  expect(getDay(august18, { calculationMethod: 'IN' })).toBe('১');
});
