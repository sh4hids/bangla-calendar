import { getMonth } from '../getMonth';

// const may14 = new Date('May 14 2021 06:22:03');
// const may15 = new Date('May 15 2021 06:22:03');
// const may16 = new Date('May 16 2021 06:22:03');

// const june14 = new Date('June 14 2021 06:22:03');
// const june15 = new Date('June 15 2021 06:22:03');
// const june16 = new Date('June 16 2021 06:22:03');

// const july15 = new Date('July 15 2021 06:22:03');
// const july16 = new Date('July 16 2021 06:22:03');
// const july18 = new Date('July 18 2021 06:22:03');

describe('getMonth', () => {
  const april13 = new Date('April 13 2021 06:22:03');
  describe(`Date: ${april13}`, () => {
    it(`(BD) should convert to 'চৈত্র'`, () => {
      expect(getMonth(april13)).toBe('চৈত্র');
    });

    it(`(IN) should convert to 'চৈত্র'`, () => {
      expect(getMonth(april13, { calculationMethod: 'IN' })).toBe('চৈত্র');
    });
  });

  const april14 = new Date('April 14 2021 06:22:03');
  describe(`Date: ${april14}`, () => {
    it(`(BD) should convert to 'বৈশাখ'`, () => {
      expect(getMonth(april14)).toBe('বৈশাখ');
    });

    it(`(IN) should convert to 'চৈত্র'`, () => {
      expect(getMonth(april14, { calculationMethod: 'IN' })).toBe('চৈত্র');
    });
  });

  const april15 = new Date('April 15 2021 06:22:03');
  describe(`Date: ${april15}`, () => {
    it(`(BD) should convert to 'বৈশাখ'`, () => {
      expect(getMonth(april15)).toBe('বৈশাখ');
    });

    it(`(IN) should convert to 'বৈশাখ'`, () => {
      expect(getMonth(april15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
    });
  });

  const invalidDate = new Date('sdfasf');
  describe(`Date: ${invalidDate}`, () => {
    it(`(BD) should convert to 'Invalid Date'`, () => {
      expect(getMonth(invalidDate)).toBe('Invalid Date');
    });

    it(`(IN) should convert to 'Invalid Date'`, () => {
      expect(getMonth(invalidDate, { calculationMethod: 'IN' })).toBe(
        'Invalid Date'
      );
    });
  });
});

// test(`converts ${may14} to 'বৈশাখ'`, () => {
//   expect(getMonth(may14)).toBe('বৈশাখ');
// });

// test(`converts ${may14} to 'বৈশাখ'`, () => {
//   expect(getMonth(may14, { calculationMethod: 'IN' })).toBe('বৈশাখ');
// });

// test(`converts ${may15} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may15)).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${may15} to 'বৈশাখ'`, () => {
//   expect(getMonth(may15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
// });

// test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may16)).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may16, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${may14} to 'বৈশাখ'`, () => {
//   expect(getMonth(may14)).toBe('বৈশাখ');
// });

// test(`converts ${may14} to 'বৈশাখ'`, () => {
//   expect(getMonth(may14, { calculationMethod: 'IN' })).toBe('বৈশাখ');
// });

// test(`converts ${may15} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may15)).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${may15} to 'বৈশাখ'`, () => {
//   expect(getMonth(may15, { calculationMethod: 'IN' })).toBe('বৈশাখ');
// });

// test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may16)).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${may16} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(may16, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${june14} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(june14)).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${june14} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(june14, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${june15} to 'আষাঢ়'`, () => {
//   expect(getMonth(june15)).toBe('আষাঢ়');
// });

// test(`converts ${june15} to 'জ্যৈষ্ঠ'`, () => {
//   expect(getMonth(june15, { calculationMethod: 'IN' })).toBe('জ্যৈষ্ঠ');
// });

// test(`converts ${june16} to 'আষাঢ়'`, () => {
//   expect(getMonth(june16)).toBe('আষাঢ়');
// });

// test(`converts ${june16} to 'আষাঢ়'`, () => {
//   expect(getMonth(june16, { calculationMethod: 'IN' })).toBe('আষাঢ়');
// });

// test(`converts ${july15} to 'আষাঢ়'`, () => {
//   expect(getMonth(july15)).toBe('আষাঢ়');
// });

// test(`converts ${july15} to 'আষাঢ়'`, () => {
//   expect(getMonth(july15, { calculationMethod: 'IN' })).toBe('আষাঢ়');
// });

// test(`converts ${july16} to 'শ্রাবণ'`, () => {
//   expect(getMonth(july16)).toBe('শ্রাবণ');
// });

// test(`converts ${july16} to 'আষাঢ়'`, () => {
//   expect(getMonth(july16, { calculationMethod: 'IN' })).toBe('আষাঢ়');
// });

// test(`converts ${july18} to 'শ্রাবণ'`, () => {
//   expect(getMonth(july18)).toBe('শ্রাবণ');
// });

// test(`converts ${july18} to 'শ্রাবণ'`, () => {
//   expect(getMonth(july18, { calculationMethod: 'IN' })).toBe('শ্রাবণ');
// });
