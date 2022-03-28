import { getYear } from '../getYear';

describe('getYear', () => {
  const april142021 = new Date('April 14 2021 06:22:03');
  describe(`Date: ${april142021}`, () => {
    it(`(BD) should convert to '১৪২৮'`, () => {
      expect(getYear(april142021)).toBe('১৪২৮');
    });

    it(`(IN) should convert to '১৪২৭'`, () => {
      expect(getYear(april142021, { calculationMethod: 'IN' })).toBe('১৪২৭');
    });
  });

  const april142022 = new Date('April 14 2022 06:22:03');
  describe(`Date: ${april142022}`, () => {
    it(`(BD) should convert to '১৪২৯'`, () => {
      expect(getYear(april142022)).toBe('১৪২৯');
    });

    it(`(IN) should convert to '১৪২৮'`, () => {
      expect(getYear(april142022, { calculationMethod: 'IN' })).toBe('১৪২৮');
    });
  });

  const april152022 = new Date('April 15 2022 06:22:03');
  describe(`Date: ${april152022}`, () => {
    it(`(BD) should convert to '১৪২৯'`, () => {
      expect(getYear(april152022)).toBe('১৪২৯');
    });

    it(`(IN) should convert to '১৪২৯'`, () => {
      expect(getYear(april152022, { calculationMethod: 'IN' })).toBe('১৪২৯');
    });
  });

  const april142024 = new Date('April 14 2024 06:22:03');
  describe(`Date: ${april142024}`, () => {
    it(`(BD) should convert to '১৪৩১'`, () => {
      expect(getYear(april142024)).toBe('১৪৩১');
    });

    it(`(IN) should convert to '১৪৩১'`, () => {
      expect(getYear(april142024, { calculationMethod: 'IN' })).toBe('১৪৩১');
    });
  });

  const invalidDate = new Date('xyzdate');
  describe(`Date: ${invalidDate}`, () => {
    it(`(BD) should convert to 'Invalid Date'`, () => {
      expect(getYear(invalidDate, { format: 'YY' })).toBe('Invalid Date');
    });

    it(`(IN) should convert to 'Invalid Date'`, () => {
      expect(
        getYear(invalidDate, { format: 'YY', calculationMethod: 'IN' })
      ).toBe('Invalid Date');
    });
  });
});
