function convertToTaka(data) {
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

  if (!data || isNaN(data - 0) || isNaN(parseFloat(data))) {
    return data;
  }

  const input = data.toString();
  const length = input.length;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      result += input[i] === '-' ? `-৳` : `৳${numbers[input[i]]}`;
    } else {
      result += numbers[input[i]];
    }
  }
  return result;
}

export default convertToTaka;
