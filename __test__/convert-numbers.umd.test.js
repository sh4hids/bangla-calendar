const { convertNumbers } = require('../umd/bn-number-utils');

test("converts 1 to '১'", () => {
  expect(convertNumbers(1)).toBe('১');
});

test("converts 1.1 to '১.১'", () => {
  expect(convertNumbers(1.1)).toBe('১.১');
});

test("converts 1.051 to '১.০৫১'", () => {
  expect(convertNumbers(1.051)).toBe('১.০৫১');
});

test("converts -1.51 to '-১.৫১'", () => {
  expect(convertNumbers(-1.051)).toBe('-১.০৫১');
});

test("converts 'a.1' to 'a.১'", () => {
  expect(convertNumbers('a.1')).toBe('a.১');
});

test("converts '1a' to '১a'", () => {
  expect(convertNumbers('1a')).toBe('১a');
});

test("converts '-1.0a' to '১.০a'", () => {
  expect(convertNumbers('1.0a')).toBe('১.০a');
});

test("converts '3 টি প্রোফাইল পাওয়া গিয়েছে' to '৩ টি প্রোফাইল পাওয়া গিয়েছে'", () => {
  expect(convertNumbers('3 টি প্রোফাইল পাওয়া গিয়েছে')).toBe(
    '৩ টি প্রোফাইল পাওয়া গিয়েছে'
  );
});

test("converts 'মার্চ 20, 2019' to 'মার্চ ২০, ২০১৯'", () => {
  expect(convertNumbers('মার্চ 20, 2019')).toBe('মার্চ ২০, ২০১৯');
});

test("converts '' to ''", () => {
  expect(convertNumbers()).toBe('');
});
