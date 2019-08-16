export default function(date = new Date(), options = {}) {
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month < 3 || (month === 3 && day < 13)) {
    return year - 594;
  }

  return year - 593;
}
