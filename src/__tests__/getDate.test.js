import getDate from '../getDate';

const date1 = new Date('2021-01-01T04:26:41.166Z');
const date2 = new Date('2021-01-31T04:26:41.166Z');

const date3 = new Date('2021-02-01T04:26:41.166Z');
const date31 = new Date('2022-02-13T04:26:41.166Z');
const date4 = new Date('2021-02-28T04:26:41.166Z');

const date5 = new Date('2021-03-01T04:26:41.166Z');
const date6 = new Date('2021-03-31T04:26:41.166Z');

const date7 = new Date('2021-04-01T04:26:41.166Z');
const date8 = new Date('2021-04-30T04:26:41.166Z');

const date9 = new Date('2021-05-01T04:26:41.166Z');
const date10 = new Date('2021-05-31T04:26:41.166Z');

const date11 = new Date('2021-06-01T04:26:41.166Z');
const date12 = new Date('2021-06-30T04:26:41.166Z');

const date13 = new Date('2021-07-01T04:26:41.166Z');
const date14 = new Date('2021-07-31T04:26:41.166Z');

const date15 = new Date('2021-08-01T04:26:41.166Z');
const date16 = new Date('2021-08-31T04:26:41.166Z');

const date17 = new Date('2021-09-01T04:26:41.166Z');
const date18 = new Date('2021-09-30T04:26:41.166Z');

const date19 = new Date('2021-10-01T04:26:41.166Z');
const date20 = new Date('2021-10-31T04:26:41.166Z');

const date21 = new Date('2021-11-01T04:26:41.166Z');
const date22 = new Date('2021-11-30T04:26:41.166Z');

const date23 = new Date('2021-12-01T04:26:41.166Z');
const date24 = new Date('2021-12-31T04:26:41.166Z');

const date25 = new Date('2022-01-05T04:26:41.166Z');
const date26 = new Date('2022-01-19T04:26:41.166Z');

test('should generate correct Bangla date for date1', () => {
  const result = getDate(date1);
  const expectedResult = 'শুক্রবার, ১৭ পৌষ, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date2', () => {
  const result = getDate(date2);
  const expectedResult = 'রবিবার, ১৭ মাঘ, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date3', () => {
  const result = getDate(date3);
  const expectedResult = 'সোমবার, ১৮ মাঘ, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date31', () => {
  const result = getDate(date31);
  const expectedResult = 'রবিবার, ৩০ মাঘ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date4', () => {
  const result = getDate(date4);
  const expectedResult = 'রবিবার, ১৫ ফাল্গুন, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date5', () => {
  const result = getDate(date5);
  const expectedResult = 'সোমবার, ১৬ ফাল্গুন, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date6', () => {
  const result = getDate(date6);
  const expectedResult = 'বুধবার, ১৭ চৈত্র, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date7', () => {
  const result = getDate(date7);
  const expectedResult = 'বৃহস্পতিবার, ১৮ চৈত্র, ১৪২৭';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date8', () => {
  const result = getDate(date8);
  const expectedResult = 'শুক্রবার, ১৭ বৈশাখ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date9', () => {
  const result = getDate(date9);
  const expectedResult = 'শনিবার, ১৮ বৈশাখ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date10', () => {
  const result = getDate(date10);
  const expectedResult = 'সোমবার, ১৭ জ্যৈষ্ঠ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date11', () => {
  const result = getDate(date11);
  const expectedResult = 'মঙ্গলবার, ১৮ জ্যৈষ্ঠ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date12', () => {
  const result = getDate(date12);
  const expectedResult = 'বুধবার, ১৬ আষাঢ়, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date13', () => {
  const result = getDate(date13);
  const expectedResult = 'বৃহস্পতিবার, ১৭ আষাঢ়, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date14', () => {
  const result = getDate(date14);
  const expectedResult = 'শনিবার, ১৬ শ্রাবণ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date15', () => {
  const result = getDate(date15);
  const expectedResult = 'রবিবার, ১৭ শ্রাবণ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date16', () => {
  const result = getDate(date16);
  const expectedResult = 'মঙ্গলবার, ১৬ ভাদ্র, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date17', () => {
  const result = getDate(date17);
  const expectedResult = 'বুধবার, ১৭ ভাদ্র, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date18', () => {
  const result = getDate(date18);
  const expectedResult = 'বৃহস্পতিবার, ১৫ আশ্বিন, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date19', () => {
  const result = getDate(date19);
  const expectedResult = 'শুক্রবার, ১৬ আশ্বিন, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date20', () => {
  const result = getDate(date20);
  const expectedResult = 'রবিবার, ১৫ কার্তিক, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date21', () => {
  const result = getDate(date21);
  const expectedResult = 'সোমবার, ১৬ কার্তিক, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date22', () => {
  const result = getDate(date22);
  const expectedResult = 'মঙ্গলবার, ১৫ অগ্রহায়ণ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date23', () => {
  const result = getDate(date23);
  const expectedResult = 'বুধবার, ১৬ অগ্রহায়ণ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date24', () => {
  const result = getDate(date24);
  const expectedResult = 'শুক্রবার, ১৬ পৌষ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date25', () => {
  const result = getDate(date25);
  const expectedResult = 'বুধবার, ২১ পৌষ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});

test('should generate correct Bangla date for date26', () => {
  const result = getDate(date26);
  const expectedResult = 'বুধবার, ৫ মাঘ, ১৪২৮';
  expect(result).toEqual(expectedResult);
});
