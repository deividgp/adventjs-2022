export default function countHours(year, holidays) {
  let hours = 0;

  holidays.forEach((h) => {
    const day = new Date(h + "/" + year).getDay();
    if (day >= 1 && day <= 5) {
      hours += 2;
    }
  });

  return hours;
}
