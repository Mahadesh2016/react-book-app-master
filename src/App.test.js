import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ShallowRenderer from "react-test-renderer/shallow";

it("app renders without crashing", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
});
