/* eslint-disable no-return-assign */
const yup = require("yup");

const boundaries = {};
const AllowedDirection = ["N", "S", "E", "W"];
const AllowedInstruction = ["M", "R", "L"];

const InstructionsProcessorSchema = yup.object({
  position: yup.object({
    x: yup
      .number()
      .min(0)
      .test({
        message: "x should be less than width",
        test: (value) => value < boundaries.width,
      })
      .required(),
    y: yup
      .number()
      .min(0)
      .test({
        message: "y should be less than height",
        test: (value) => value < boundaries.height,
      })
      .required(),
    direction: yup.string().oneOf(AllowedDirection).required(),
  }),
  instructions: yup
    .string()
    .matches(new RegExp(`^[${AllowedInstruction.join("")}]*$`), "instructions should be a string of M, R, L")
    .required(),
  width: yup
    .number()
    .min(1)
    .max(10000)
    .required()
    .test({
      test: (value) => (boundaries.width = value),
    }),
  height: yup
    .number()
    .min(1)
    .max(10000)
    .required()
    .test({
      test: (value) => (boundaries.height = value),
    }),
});

module.exports = { InstructionsProcessorSchema };
