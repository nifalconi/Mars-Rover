import React, { useState } from "react";
import "./styles.css";
import WallEImg from "../images/wall-e.png";
import robotClient from "./client/robot-client";

function MoveRobotForm() {
  const [newPosition, setNewPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [direction, setDirection] = useState("N");
  const [instructions, setInstructions] = useState("M");

  const handleSubmit = () => {
    const body = {
      width,
      height,
      position: {
        x: positionX,
        y: positionY,
        direction,
      },
      instructions,
    };

    robotClient
      .post("v1/move", body)
      .then((response) => {
        setNewPosition(response.data);
        setErrorMessage(null);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setNewPosition(null);
      });
  };

  return (
    <div
      className="MoveRobotForm"
      style={{
        textAlign: "center",
        padding: "20px",
        paddingLeft: "30%",
        paddingRight: "30%",
      }}
    >
      <label> width </label>
      <input
        type="number"
        name="width"
        value={width}
        data-testid="width"
        onChange={(e) => setWidth(e.currentTarget.value)}
      />
      <br />
      <label> height </label>
      <input
        type="number"
        name="height"
        value={height}
        data-testid="height"
        onChange={(e) => setHeight(e.currentTarget.value)}
      />
      <br />
      <label> positionX </label>
      <input
        type="number"
        name="positionX"
        value={positionX}
        data-testid="positionX"
        onChange={(e) => setPositionX(e.currentTarget.value)}
      />
      <br />
      <label> positionY </label>
      <input
        type="number"
        name="positionY"
        value={positionY}
        data-testid="positionY"
        onChange={(e) => setPositionY(e.currentTarget.value)}
      />
      <br />
      <label> direction </label>
      <select
        name="direction"
        value={direction}
        data-testid="direction"
        onChange={(e) => setDirection(e.currentTarget.value)}
      >
        <option value="N">N</option>
        <option value="E">E</option>
        <option value="S">S</option>
        <option value="W">W</option>
      </select>
      <br />
      <label> instructions </label>
      <input
        type="text"
        name="instructions"
        value={instructions}
        data-testid="instructions"
        onChange={(e) => setInstructions(e.currentTarget.value)}
      />
      <br />
      <button data-testid="submit" onClick={handleSubmit}>
        {" "}
        submit{" "}
      </button>
      {newPosition && (
        <div>
          <table
            style={{
              border: "1px solid black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <thead>
              <tr>
                <th> Coordinate </th>
                <th> Value </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> x </td>
                <td> {newPosition.position.x} </td>
              </tr>
              <tr>
                <td> y </td>
                <td> {newPosition.position.y} </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {errorMessage && (
        <div>
          <h1> {errorMessage} </h1>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <img src={WallEImg} height="200" alt="wall-e robot" />
      <h1>MARS ROVER</h1>
      <div>
        <MoveRobotForm />
      </div>
    </div>
  );
}
