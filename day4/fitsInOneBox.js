export default function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
    .every((box, i) =>
      boxes[i + 1]
        ? boxes[i + 1].l > box.l && boxes[i + 1].w > box.w && boxes[i + 1].h
        : true
    );
}
