import React from "react";
import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";
import App from "../src/App";
// import robotClient from "../src/client/robot-client";

describe("app: Mars Rover", () => {
  it("renders without crashing", () => {
    expect.hasAssertions();
    const { getByText } = render(<App />);
    const linkElement = getByText(/Mars Rover/i);
    expect(linkElement).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it("should return Mars Rover new position", async () => {
  //   expect.hasAssertions();

  //   const position = { x: "1", y: "20", direction: "N" };

  //   const clientResponse = jest
  //     .spyOn(robotClient, "post")
  //     .mockImplementation(() => Promise.resolve({ data: { ...position } }));

  //   const component = render(<App />);
  //   const widthInput = component.getByTestId("width");
  //   const heightInput = component.getByTestId("height");
  //   const positionXInput = component.getByTestId("positionX");
  //   const positionYInput = component.getByTestId("positionY");
  //   const directionInput = component.getByTestId("direction");
  //   const instructionsInput = component.getByTestId("instructions");
  //   const submitButton = component.getByTestId("submit");

  //   await act(async () => {
  //     await userEvent.clear(widthInput);
  //     await userEvent.type(widthInput, "10");
  //     await userEvent.clear(heightInput);
  //     await userEvent.type(heightInput, "10");
  //     await userEvent.type(positionXInput, "1");
  //     await userEvent.type(positionYInput, "20");
  //     await userEvent.type(directionInput, "N");
  //     await userEvent.type(instructionsInput, "M");
  //     await userEvent.click(submitButton);
  //   });
  //   // eslint-disable-next-line no-promise-executor-return
  //   await new Promise((r) => setTimeout(r, 2000));

  //   await expect(clientResponse).toHaveBeenCalled();
  // });
});
