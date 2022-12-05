export default function distributeGifts(packOfGifts, reindeers) {
  const packSize = packOfGifts.reduce((total, num) => {
    return (total += num.length);
  }, 0);

  const maxCapacity = reindeers.reduce((total, num) => {
    return (total += num.length * 2);
  }, 0);

  return Math.floor(maxCapacity / packSize);
}
