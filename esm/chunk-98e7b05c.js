const convertNumbers = function(data) {
  const numbers = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
    '.': '.',
    '-': '-',
  };
  let result = '';

  if (!data) {
    return '';
  }

  const input = data.toString();
  const length = input.length;

  for (let i = 0; i < length; i++) {
    if (isNaN(parseFloat(input[i])) || isNaN(input[i] - 0)) {
      result += input[i];
    } else {
      result += numbers[input[i]];
    }
  }
  return result;
};

const banglaMonths = [
  'বৈশাখ',
  'জ্যৈষ্ঠ',
  'আষাঢ়',
  'শ্রাবণ',
  'ভাদ্র',
  'আশ্বিন',
  'কার্তিক',
  'অগ্রহায়ণ',
  'পৌষ',
  'মাঘ',
  'ফাল্গুন',
  'চৈত্র',
];

const isLeapYear = function(year = 0) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

export { isLeapYear as a, convertNumbers as b, banglaMonths as c };
