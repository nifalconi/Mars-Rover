import { instructionsProcessorController } from "../../src/controller/instructions-processor";
import { responseFactory } from "../factories/response-factory";

describe("validation: instruction processor", () => {
  it("should throw if direction is not one of [N, S, E, W]", () => {
    expect.hasAssertions();

    // Arrange.
    const wrongDirection = "X";

    const req = {
      body: {
        width: 5,
        height: 5,
        position: { x: 0, y: 0, direction: wrongDirection },
        instructions: "M",
      },
    };

    const res = responseFactory();

    const expectedError = {
      message: "position.direction must be one of the following values: N, S, E, W",
      status: "error",
    };

    // Act.
    const response = instructionsProcessorController(req, res);

    // Assert.
    expect(response).toMatchObject({
      _send: expectedError,
      _status: 400,
    });
  });
});
