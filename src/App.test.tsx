import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("App component should exists", () => {
  // Render a checkbox with label in the document
  const component = shallow(<App />);

  expect(component.exists()).toBe(true);
});
