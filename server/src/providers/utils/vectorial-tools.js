// RotationTransformation, based on https://en.wikipedia.org/wiki/Rotation_matrix#Direction
const Rotation = {
  clockwise: [
    [0, 1],
    [-1, 0],
  ],
  counterClockwise: [
    [0, -1],
    [1, 0],
  ],
};

const applyLinearTransformation = (vector, linearTransformation) => {
  const [x, y] = vector;
  const [[a, b], [c, d]] = linearTransformation;
  return [a * x + b * y, c * x + d * y];
};

const sumTwoVectors = (vector1, vector2) => {
  const [x1, y1] = vector1;
  const [x2, y2] = vector2;
  return [x1 + x2, y1 + y2];
};

module.exports = { applyLinearTransformation, sumTwoVectors, Rotation };
