function calcTriArea({ base = 1, height = 1 } = {}) {
  return 0.5 * base * height;
}

function calcSquareArea(length, width) {
  return length * width;
}

module.exports = {
  calcTriArea,
  calcSquareArea,
};
