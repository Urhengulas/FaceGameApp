import React from "react";
import App from "./App";

import renderer from "react-test-renderer";

// Jest
// Pure Function

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

function multiply(a, b) {
  return a * b;
}

function toThePowerOf(a, b) {
  if (b == 0) return 1;
  return multiply(a, toThePowerOf(a, b - 1));
}

test("that it works", () => {
  // given
  multiply = jest
    .mock()
    .whenItReceived(1, 3)
    .thenItReturns(3);
});

test("that 1 plus 2 equals 3", () => {
  // given
  const one = 1;
  const two = 2;

  // when
  const result = sum(one, two);

  // then
  expect(result).toEqual(3);
});
