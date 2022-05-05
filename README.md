# Mars Rover

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau is rectangular and must be navigated by the rovers. A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

**Example Input:**

- Plateau Size: 5 5
- Rover's Position: 1 2 N
- Rover Movement Instructions: LMLMLMLMM

**Expected Output:**
1 3 N

## Assumptions

- The API must handle arbitraty number of request asyncronally.
- The sequence of instructions are arbitrary in size.
- The API doesn't require a session.
- The borders are impenetrable.

## Project Structure

```
server
 ┣ src
 ┃ ┣ controller # responsible for handling incoming requests and returning responses to the client
 ┃ ┣ providers # responsible for handling use cases
 ┃ ┗ validations # responsible for validating the API requests
 ┣ tests # tests
 ┗ server.js # routing
 
 client 
 ┣ src # source code on react 
 ┣ tests # tests 
```

## Commands

Run server

```
yarn server
```

Run client

```
yarn client
```

Install Packages

```
yarn
```

# Testing

[Jest](https://jestjs.io/docs/getting-started) has been set up to run tests on both server and client code. Any test files you add must have the `.spec.js` appendix to be picked up by the test runner.  For frontend additional plugins are neccesary like the `@babel/plugin-transform-runtime`.

Run `yarn test:client` to run frontend tests.

Run `yarn test:server` to run backend tests.

## Validation

The library [yup](https://github.com/jquense/yup) was chosen to specify API validation as it is powerful yet simple. The validation schemas are defined in the `src/validations` directory and are used on the controller.

## Error Handling

- Client side: Any validation error is routed to the client to be shown to the user.

### API Endpoints

`POST /v1/move` - moves the robot
Example:

```
# expected input
{
 "width": 500,
 "height": 500,
 "position": { "x": 1, "y": 20, "direction": "N"},
 "instructions": "MMMMM"
}

# expected output
{
 "position": {
  "x": 1,
  "y": 25,
  "direction": [0, 1] # Mathematical Representation
     }
}
```

## Improvements

- Better web interface.
- Better client testing.
- Compress the intructions to send even more.

## Linting

Linting is done using [ESLint](https://eslint.org/).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications.

To run the linter:
```
yarn run lint
```

## License

[MIT](LICENSE)
