export default function checkJump(heights) {
  let down = false;
  let up = false;
  
  return (
    heights.every((el, index, arr) => {
      if (arr[index + 1] > el) up = true;
      if (up && arr[index - 1] <= el && el > arr[index + 1]) down = true;
      if ((arr[index + 1] > el && down) || (!down && arr[index + 1] < el))
        return false;
      return true;
    }) && down
  );
}

console.log(checkJump([3, 4, 3, 3, 2]));
console.log(checkJump([1, 2, 2, 2, 1]));
console.log(checkJump([1, 2, 3, 3, 2]));
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1]));
console.log(checkJump([3, 2, 1]));
console.log(checkJump([2, 2, 1]));
