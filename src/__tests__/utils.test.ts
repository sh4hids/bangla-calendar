import { formatDay, isLeapYear, isValidDate } from '../utils';

describe('utils', () => {
  describe('isLeapYear', () => {
    it('should return true for 2000', () => {
      expect(isLeapYear(2000)).toBe(true);
    });
    it('should return false for 2001', () => {
      expect(isLeapYear(2001)).toBe(false);
    });
    it('should return true for 2020', () => {
      expect(isLeapYear(2020)).toBe(true);
    });
  });

  describe('isValidDate', () => {
    it('should return true for 2022-03-23', () => {
      expect(isValidDate(new Date('2022-03-23'))).toBe(true);
    });
    it('should return false for 2022-13-33', () => {
      expect(isValidDate(new Date('2022-13-33'))).toBe(false);
    });
  });

  describe('formatDay', () => {
    it('should return ১ for 1', () => {
      expect(formatDay(1, 'D')).toBe('১');
    });
    it('should return ১১ for 11', () => {
      expect(formatDay(11, 'D')).toBe('১১');
    });
  });
});
