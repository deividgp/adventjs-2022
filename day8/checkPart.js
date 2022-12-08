function checkPart1(part) {
  [...part].forEach((element) => {
    if ([...part].filter((el) => el === element).length == 1) {
      part = part.replace(element, "");
    }
  });

  if (part.length == 0) {
    return false;
  }

  return part === [...part].slice(1).reverse().join("");
}

export default function checkPart(part) {
  let x = [...part].slice(1).join("") == [...part].slice(1).reverse().join("");
  let y = [...part].reduce((x, y, i) => x + ([...part].reverse()[i] != y), 0);
  return x || y <= 2;
}

export default function checkPart2(part) {
  return [...part].some((_, i, arr) => {
    const tr = arr.filter((_, k) => i != k);
    return tr.join("") == tr.reverse().join("");
  });
}
