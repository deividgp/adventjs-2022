export default function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce((total, num) => {
      return (total += num.length * 2);
    }, 0) /
      packOfGifts.reduce((total, num) => {
        return (total += num.length);
      }, 0)
  );
}
