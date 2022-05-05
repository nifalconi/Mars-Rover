import { instructionsProcessorController } from "../../src/controller/instructions-processor";
import { responseFactory } from "../factories/response-factory";

describe("controller: instruction processor", () => {
  it("should not cross the boundaries on the x-axis", () => {
    expect.hasAssertions();

    // Arrange.
    const req = {
      body: {
        width: 5,
        height: 5,
        position: { x: 0, y: 0, direction: "W" },
        instructions: "MMM",
      },
    };

    const res = responseFactory();

    const correctResponse = { position: { direction: [-1, 0], x: 0, y: 0 } };

    // Act.
    const response = instructionsProcessorController(req, res);

    // Assert.
    expect(response).toMatchObject({
      _send: correctResponse,
      _status: 200,
    });
  });

  it("should not cross the boundaries on the y-axis", () => {
    expect.hasAssertions();

    // Arrange.
    const req = {
      body: {
        width: 5,
        height: 5,
        position: { x: 0, y: 0, direction: "S" },
        instructions: "MMM",
      },
    };

    const res = responseFactory();

    const correctResponse = { position: { direction: [0, -1], x: 0, y: 0 } };

    // Act.
    const response = instructionsProcessorController(req, res);

    // Assert.
    expect(response).toMatchObject({
      _send: correctResponse,
      _status: 200,
    });
  });
});
