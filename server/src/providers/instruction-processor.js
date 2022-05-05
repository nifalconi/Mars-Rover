/* eslint-disable no-param-reassign */

const { applyLinearTransformation: changeDirection, sumTwoVectors: updateCoordinates, Rotation } = require("./utils/vectorial-tools");

const Instructions = {
  M: "M",
  R: "R",
  L: "L",
};

const MathematicalDirection = {
  N: [0, 1],
  S: [0, -1],
  E: [1, 0],
  W: [-1, 0],
};

const InstructionsProcessor = (width, height, initialPosition) => {
  initialPosition.direction = MathematicalDirection[initialPosition.direction];

  return {
    [Instructions.R]: (position) => {
      const { direction } = position;
      position.direction = changeDirection(direction, Rotation.clockwise);
    },
    [Instructions.L]: (position) => {
      const { direction } = position;
      position.direction = changeDirection(
        direction,
        Rotation.counterClockwise,
      );
    },
    [Instructions.M]: (position) => {
      const { x, y, direction } = position;
      const [newRow, newColumn] = updateCoordinates(direction, [x, y]);

      const rowInBounds = newRow >= 0 && newRow < width;
      const columnInBounds = newColumn >= 0 && newColumn < height;

      if (!rowInBounds || !columnInBounds) return;
      position.x = newRow;
      position.y = newColumn;
    },
  };
};

module.exports = { InstructionsProcessor };
