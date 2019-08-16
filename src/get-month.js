export default function(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if ((month === 3 && day > 13) || (month === 4 && day < 15)) {
    return 'বৈশাখ';
  }

  if ((month === 4 && day > 14) || (month === 5 && day < 15)) {
    return 'জ্যৈষ্ঠ';
  }

  if ((month === 5 && day > 14) || (month === 6 && day < 16)) {
    return 'আষাঢ়';
  }

  if ((month === 6 && day > 15) || (month === 7 && day < 16)) {
    return 'শ্রাবণ';
  }

  if ((month === 7 && day > 15) || (month === 8 && day < 16)) {
    return 'ভাদ্র';
  }

  if ((month === 8 && day > 15) || (month === 9 && day < 16)) {
    return 'আশ্বিন';
  }

  if ((month === 9 && day > 15) || (month === 10 && day < 15)) {
    return 'কার্তিক';
  }

  if ((month === 10 && day > 14) || (month === 11 && day < 15)) {
    return 'অগ্রহায়ণ';
  }

  if ((month === 11 && day > 14) || (month === 0 && day < 14)) {
    return 'পৌষ';
  }

  if ((month === 0 && day > 13) || (month === 1 && day < 13)) {
    return 'মাঘ';
  }

  if ((month === 1 && day > 12) || (month === 2 && day < 15)) {
    return 'ফাল্গুন';
  }

  if ((month === 2 && day > 14) || (month === 3 && day < 14)) {
    return 'চৈত্র';
  }
}
