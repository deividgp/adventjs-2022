export default function distributeGifts(packOfGifts, reindeers) {
  let maxCapacity = 0;
  let packSize = 0;

  packOfGifts.forEach((element) => {
    packSize += element.length;
  });

  reindeers.forEach((element) => {
    maxCapacity += 2 * element.length;
  });

  return Math.floor(maxCapacity / packSize);
}
