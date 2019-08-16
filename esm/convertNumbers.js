function convertNumbers(data) {
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
}

export default convertNumbers;
