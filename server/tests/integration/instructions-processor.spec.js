import { instructionsProcessorController } from "../../src/controller/instructions-processor";
import { responseFactory } from "../factories/response-factory";

describe("integration-test: instructions processor", () => {
  it("should return the correct new position", () => {
    expect.hasAssertions();

    // Arrange.
    const req = {
      body: {
        width: 5,
        height: 5,
        position: { x: 0, y: 0, direction: "N" },
        instructions: "RRMMRRMMRMMLMMLL",
      },
    };

    const res = responseFactory();

    const correctResponse = { position: { direction: [-0, -1], x: 2, y: 4 } };

    // Act.
    const response = instructionsProcessorController(req, res);

    // Assert.
    expect(response).toMatchObject({
      _send: correctResponse,
      _status: 200,
    });
  });
});
