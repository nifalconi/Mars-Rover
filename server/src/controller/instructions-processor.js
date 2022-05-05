/* eslint-disable no-restricted-syntax */

const { InstructionsProcessor } = require("../providers/instruction-processor");
const { InstructionsProcessorSchema } = require("../validations/instructions-processor-schema");

const instructionsProcessorController = (req, res) => {
  let parsedBody;

  try {
    parsedBody = InstructionsProcessorSchema.validateSync(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: error.message,
    });
  }

  const {
    width, height, instructions, position,
  } = parsedBody;

  const instructionProcessor = InstructionsProcessor(width, height, position);

  for (const instruction of instructions) {
    const process = instructionProcessor[instruction];

    process(position);
  }

  return res.status(200).send({ position });
};

module.exports = { instructionsProcessorController };
