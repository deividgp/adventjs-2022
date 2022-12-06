export default function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) =>
      boxes[i + 1] ? boxes[i + 1].w > box.w && boxes[i + 1].h > box.h : true
    );
}
