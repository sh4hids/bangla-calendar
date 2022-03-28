import { getWeekDay } from '../getWeekDay';

describe('getWeekDay', () => {
  const august16 = new Date('August 16 2022 06:22:03');
  describe(`Date: ${august16}`, () => {
    it(`(BD) should convert ${august16} to 'মঙ্গলবার'`, () => {
      expect(getWeekDay(august16)).toBe('মঙ্গলবার');
    });
    it(`(IN) should convert ${august16} to 'মঙ্গলবার'`, () => {
      expect(getWeekDay(august16, { calculationMethod: 'IN' })).toBe(
        'মঙ্গলবার'
      );
    });
  });

  const invalidDate = new Date('notaweek');
  describe(`Date: ${invalidDate}`, () => {
    it(`(BD) should convert ${invalidDate} to 'Invalid Date'`, () => {
      expect(getWeekDay(invalidDate)).toBe('Invalid Date');
    });
    it(`(IN) should convert ${invalidDate} to 'Invalid Date'`, () => {
      expect(getWeekDay(invalidDate, { calculationMethod: 'IN' })).toBe(
        'Invalid Date'
      );
    });
  });
});
