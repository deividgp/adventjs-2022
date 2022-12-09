export default function countTime(leds) {
  let seconds = 0;

  while (leds.includes(0)) {
    seconds += 7;
    leds = leds.map((element, index, array) => {
      if (element == 1) return element;

      let previousElem = array[index - 1];

      if (index == 0) {
        previousElem = array[array.length - 1];
      }

      if (previousElem == 1) {
        return 1;
      }
      return element;
    });
  }

  return seconds;
}

const leds = [0, 1, 1, 0, 1];
countTime(leds);
