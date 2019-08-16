const { convertToTaka } = require('../umd/bn-number-utils');

test("converts 1 to '৳১'", () => {
  expect(convertToTaka(1)).toBe('৳১');
});

test("converts 1.1 to '৳১.১'", () => {
  expect(convertToTaka(1.1)).toBe('৳১.১');
});

test("converts 1.051 to '৳১.০৫১'", () => {
  expect(convertToTaka(1.051)).toBe('৳১.০৫১');
});

test("converts -1.51 to '-৳১.৫১'", () => {
  expect(convertToTaka(-1.051)).toBe('-৳১.০৫১');
});

test("converts 'a.1' to 'a.1'", () => {
  expect(convertToTaka('a.1')).toBe('a.1');
});

test("converts '1a' to '1a'", () => {
  expect(convertToTaka('1a')).toBe('1a');
});

test("converts '-1.0a' to '-1.0a'", () => {
  expect(convertToTaka('-1.0a')).toBe('-1.0a');
});

test("converts undefined to ''", () => {
  expect(convertToTaka()).toBe(undefined);
});

test("converts '' to ''", () => {
  expect(convertToTaka('')).toBe('');
});
