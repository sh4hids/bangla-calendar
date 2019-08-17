const { getDay } = require('../umd/bangla-calendar');

const now = new Date('August 16 2019 06:22:03');

test(`converts ${now} to '১'`, () => {
  expect(getDay(now)).toBe('১');
});

test(`converts ${now} to '০১'`, () => {
  expect(getDay(now, { format: 'DD' })).toBe('০১');
});
