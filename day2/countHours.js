export default function countHours(year, holidays) {
  return holidays.reduce((total, h) => {
    const day = new Date(h + "/" + year).getDay();
    if (day >= 1 && day <= 5) {
      return (total += 2);
    }
    return total;
  }, 0);
}
