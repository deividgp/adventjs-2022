export default function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, num) => {
      if (
        maxCities == 0 ||
        total + num > maxGifts ||
        total + num === maxGifts - 1
      )
        return total;
      maxCities--;
      return (total += num);
    }, 0);
}
