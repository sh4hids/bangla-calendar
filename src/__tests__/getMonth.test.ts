import { getMonth } from '../getMonth';

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
      let error: Error | undefined;
      try {
        getMonth(invalidDate);
      } catch (err) {
        error = err;
      }
      expect(error).toEqual(new Error('Invalid Date'));
    });

    it(`(IN) should convert to 'Invalid Date'`, () => {
      let error: Error | undefined;
      try {
        getMonth(invalidDate, { calculationMethod: 'IN' });
      } catch (err) {
        error = err;
      }
      expect(error).toEqual(new Error('Invalid Date'));
    });
  });
});
