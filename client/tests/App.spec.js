import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../src/App";
import robotClient from "../src/client/robot-client";

describe("app: Mars Rover", () => {
  it("renders without crashing", () => {
    expect.hasAssertions();

    // Arrange.
    const { getByText } = render(<App />);

    // Act.
    const linkElement = getByText(/Mars Rover/i);

    // Arrange.
    expect(linkElement).toBeInTheDocument();
  });

  it("should return Mars Rover new position", async () => {
    expect.hasAssertions();

    // Arrange.
    const expectedPosition = { x: "1", y: "20", direction: "N" };
    const expectedWidth = "10";
    const expectedHeight = "10";
    const expectedInstructions = "MM";

    const clientResponse = jest
      .spyOn(robotClient, "post")
      .mockImplementation(() => Promise.resolve({ data: { ...expectedPosition } }));

    const component = render(<App />);
    const widthInput = component.getByTestId("width");
    const heightInput = component.getByTestId("height");
    const positionXInput = component.getByTestId("positionX");
    const positionYInput = component.getByTestId("positionY");
    const directionInput = component.getByTestId("direction");
    const instructionsInput = component.getByTestId("instructions");
    const submitButton = component.getByTestId("submit");

    // Act.
    await act(async () => {
      await userEvent.clear(widthInput);
      await userEvent.type(widthInput, expectedWidth);
      await userEvent.clear(heightInput);
      await userEvent.type(heightInput, expectedHeight);
      await userEvent.type(positionXInput, "1");
      await userEvent.type(positionYInput, "20");
      await userEvent.type(directionInput, "N");
      await userEvent.type(instructionsInput, "M");
      await userEvent.click(submitButton);
    });

    // Assert.
    expect(clientResponse).toHaveBeenCalledWith("v1/move", {
      width: expectedWidth,
      height: expectedHeight,
      instructions: expectedInstructions,
      position: expectedPosition,
    });
  });
  it("should return error message", async () => {
    expect.hasAssertions();

    // Arrange.
    const expectedErrorMessage = {
      response: {
        data: {
          status: "error",
          message: "instructions should be a string of M, R, L",
        },
      },
    };

    jest
      .spyOn(robotClient, "post")
      .mockImplementation(() => Promise.reject(expectedErrorMessage));

    const component = render(<App />);
    const instructionsInput = component.getByTestId("instructions");
    const submitButton = component.getByTestId("submit");

    // Act.
    await act(async () => {
      await userEvent.type(instructionsInput, "K");
      await userEvent.click(submitButton);
    });

    const linkElement = component.getByText(expectedErrorMessage.response.data.message);

    // Assert.
    expect(linkElement).toBeInTheDocument();
  });
});
