export default function createCube(size) {
  let up = "",
    down = "";
  for (let i = 1; i <= size; i++) {
    up += " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n";
    down =
      " ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size) + "\n" + down;
  }
  return up + down.trim("\n");
}
