export default function(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month === 0) {
    return day < 14 ? day + 17 : day - 13;
  }

  if (month === 1) {
    return day < 13 ? day + 18 : day - 12;
  }

  if (month === 2) {
    return day < 15 ? (isLeapYear(year) ? day + 17 : day + 16) : day - 14;
  }

  if (month === 3) {
    return day < 14 ? day + 17 : day - 13;
  }

  if (month === 4) {
    return day < 15 ? day + 17 : day - 14;
  }

  if (month === 5) {
    return day < 15 ? day + 17 : day - 14;
  }

  if (month === 6) {
    return day < 16 ? day + 16 : day - 15;
  }

  if (month === 7) {
    return day < 16 ? day + 16 : day - 15;
  }

  if (month === 8) {
    return day < 16 ? day + 16 : day - 15;
  }

  if (month === 9) {
    return day < 16 ? day + 15 : day - 15;
  }

  if (month === 10) {
    return day < 15 ? day + 16 : day - 14;
  }

  if (month === 11) {
    return day < 15 ? day + 16 : day - 14;
  }
}
