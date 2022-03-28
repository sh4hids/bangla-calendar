import { getDate } from '..';

describe('getDate', () => {
  const march28 = new Date('March 28 2022 06:22:03');
  describe(`Date: ${march28}`, () => {
    it(`(BD) should return 'সোমবার, ১৪ চৈত্র, ১৪২৮'`, () => {
      expect(getDate(march28)).toEqual('সোমবার, ১৪ চৈত্র, ১৪২৮');
    });
    it(`(IN) should return 'সোমবার, ১৩ চৈত্র, ১৪২৮'`, () => {
      expect(getDate(march28, { calculationMethod: 'IN' })).toEqual(
        'সোমবার, ১৩ চৈত্র, ১৪২৮'
      );
    });
  });

  const march162023 = new Date('March 16 2023 06:22:03');
  describe(`Date: ${march162023}`, () => {
    it(`(BD) should return 'বৃহস্পতিবার, ২ চৈত্র, ১৪২৯'`, () => {
      expect(getDate(march162023)).toEqual('বৃহস্পতিবার, ২ চৈত্র, ১৪২৯');
    });
    it(`(IN) should return 'বৃহস্পতিবার, ১ চৈত্র, ১৪২৯'`, () => {
      expect(getDate(march162023, { calculationMethod: 'IN' })).toEqual(
        'বৃহস্পতিবার, ১ চৈত্র, ১৪২৯'
      );
    });
  });

  const april142022 = new Date('April 14 2022 06:22:03');
  describe(`Date: ${april142022}`, () => {
    it(`(BD) should return 'বৃহস্পতিবার, ১ বৈশাখ, ১৪২৯'`, () => {
      expect(getDate(april142022)).toEqual('বৃহস্পতিবার, ১ বৈশাখ, ১৪২৯');
    });
    it(`(IN) should return 'বৃহস্পতিবার, ৩০ চৈত্র, ১৪২৮'`, () => {
      expect(getDate(april142022, { calculationMethod: 'IN' })).toEqual(
        'বৃহস্পতিবার, ৩০ চৈত্র, ১৪২৮'
      );
    });
  });
});
