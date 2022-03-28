import { getDay } from '../getDay';

describe('getDay', () => {
  const march28 = new Date('March 28 2022 06:22:03');
  describe(`Date: ${march28}`, () => {
    it(`(BD) should convert to '১৪'`, () => {
      expect(getDay(march28)).toBe('১৪');
    });

    it(`(IN) should convert to '১৩'`, () => {
      expect(getDay(march28, { calculationMethod: 'IN' })).toBe('১৩');
    });
  });

  const april13 = new Date('April 13 2022 06:22:03');
  describe(`Date: ${april13}`, () => {
    it(`(BD) should convert to '৩০'`, () => {
      expect(getDay(april13)).toBe('৩০');
    });

    it(`(IN) should convert to '২৯'`, () => {
      expect(getDay(april13, { calculationMethod: 'IN' })).toBe('২৯');
    });
  });

  const april14 = new Date('April 14 2022 06:22:03');
  describe(`Date: ${april14}`, () => {
    it(`(BD) should convert to '১'`, () => {
      expect(getDay(april14)).toBe('১');
    });

    it(`(IN) should convert to '৩০'`, () => {
      expect(getDay(april14, { calculationMethod: 'IN' })).toBe('৩০');
    });
  });

  const april15 = new Date('April 15 2022 06:22:03');
  describe(`Date: ${april15}`, () => {
    it(`(BD) should convert to '২'`, () => {
      expect(getDay(april15)).toBe('২');
    });

    it(`(IN) should convert to '১'`, () => {
      expect(getDay(april15, { calculationMethod: 'IN' })).toBe('১');
    });
  });

  const may14 = new Date('May 14 2022 06:22:03');
  describe(`Date: ${may14}`, () => {
    it(`(BD) should convert to '৩১'`, () => {
      expect(getDay(may14)).toBe('৩১');
    });

    it(`(IN) should convert to '৩০'`, () => {
      expect(getDay(may14, { calculationMethod: 'IN' })).toBe('৩০');
    });
  });

  const may15 = new Date('May 15 2022 06:22:03');
  describe(`Date: ${may15}`, () => {
    it(`(BD) should convert to '১'`, () => {
      expect(getDay(may15)).toBe('১');
    });

    it(`(IN) should convert to '৩১'`, () => {
      expect(getDay(may15, { calculationMethod: 'IN' })).toBe('৩১');
    });
  });

  const may16 = new Date('May 16 2022 06:22:03');
  describe(`Date: ${may16}`, () => {
    it(`(BD) should convert to '২'`, () => {
      expect(getDay(may16)).toBe('২');
    });
    it(`(IN) should convert to '১'`, () => {
      expect(getDay(may16, { calculationMethod: 'IN' })).toBe('১');
    });
  });

  const june14 = new Date('June 14 2022 06:22:03');
  describe(`Date: ${june14}`, () => {
    it(`(BD) should convert to '৩১'`, () => {
      expect(getDay(june14)).toBe('৩১');
    });

    it(`(IN) should convert to '৩০'`, () => {
      expect(getDay(june14, { calculationMethod: 'IN' })).toBe('৩০');
    });
  });
  const june15 = new Date('June 15 2022 06:22:03');
  describe(`Date: ${june15}`, () => {
    it(`(BD) should convert to '১'`, () => {
      expect(getDay(june15)).toBe('১');
    });

    it(`(IN) should convert to '৩১'`, () => {
      expect(getDay(june15, { calculationMethod: 'IN' })).toBe('৩১');
    });
  });
  const june16 = new Date('June 16 2022 06:22:03');
  describe(`Date: ${june16}`, () => {
    it(`(BD) should convert to '২'`, () => {
      expect(getDay(june16)).toBe('২');
    });

    it(`(IN) should convert to '১'`, () => {
      expect(getDay(june16, { calculationMethod: 'IN' })).toBe('১');
    });
  });

  const july14 = new Date('July 14 2022 06:22:03');
  describe(`Date: ${july14}`, () => {
    it(`(BD) should convert to '৩০'`, () => {
      expect(getDay(july14)).toBe('৩০');
    });

    it(`(IN) should convert to '২৯'`, () => {
      expect(getDay(july14, { calculationMethod: 'IN' })).toBe('২৯');
    });
  });
  const july15 = new Date('July 15 2022 06:22:03');
  describe(`Date: ${july15}`, () => {
    it(`(BD) should convert to '৩১'`, () => {
      expect(getDay(july15)).toBe('৩১');
    });

    it(`(IN) should convert to '৩০'`, () => {
      expect(getDay(july15, { calculationMethod: 'IN' })).toBe('৩০');
    });
  });
  const july17 = new Date('July 17 2022 06:22:03');
  describe(`Date: ${july17}`, () => {
    it(`(BD) should convert to '২'`, () => {
      expect(getDay(july17)).toBe('২');
    });

    it(`(IN) should convert to '৩২'`, () => {
      expect(getDay(july17, { calculationMethod: 'IN' })).toBe('৩২');
    });
  });
  const july18 = new Date('July 18 2022 06:22:03');
  describe(`Date: ${july18}`, () => {
    it(`(BD) should convert to '৩'`, () => {
      expect(getDay(july18)).toBe('৩');
    });

    it(`(IN) should convert to '১'`, () => {
      expect(getDay(july18, { calculationMethod: 'IN' })).toBe('১');
    });
  });

  const august15 = new Date('August 15 2022 06:22:03');
  describe(`Date: ${august15}`, () => {
    it(`(BD) should convert to '৩১'`, () => {
      expect(getDay(august15)).toBe('৩১');
    });

    it(`(IN) should convert to '২৯'`, () => {
      expect(getDay(august15, { calculationMethod: 'IN' })).toBe('২৯');
    });
  });
  const august16 = new Date('August 16 2022 06:22:03');
  describe(`Date: ${august16}`, () => {
    it(`(BD) should convert to '১'`, () => {
      expect(getDay(august16)).toBe('১');
    });

    it(`(IN) should convert to '৩০'`, () => {
      expect(getDay(august16, { calculationMethod: 'IN' })).toBe('৩০');
    });
  });
  const august17 = new Date('August 17 2022 06:22:03');
  describe(`Date: ${august17}`, () => {
    it(`(BD) should convert to '২'`, () => {
      expect(getDay(august17)).toBe('২');
    });

    it(`(IN) should convert to '৩১'`, () => {
      expect(getDay(august17, { calculationMethod: 'IN' })).toBe('৩১');
    });
  });
  const august18 = new Date('August 18 2022 06:22:03');
  describe(`Date: ${august18}`, () => {
    it(`(BD) should convert to '৩'`, () => {
      expect(getDay(august18)).toBe('৩');
    });

    it(`(IN) should convert to '১'`, () => {
      expect(getDay(august18, { calculationMethod: 'IN' })).toBe('১');
    });
  });
});
