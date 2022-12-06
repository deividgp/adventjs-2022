export default function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let cities = 0;

  return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, num) => {
      if (
        cities == maxCities ||
        total + num > maxGifts ||
        total + num === maxGifts - 1
      )
        return total;
      cities++;
      return (total += num);
    }, 0);
}
