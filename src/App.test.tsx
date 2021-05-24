import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("App component should exists", () => {
  const component = shallow(<App />);

  expect(component.exists()).toBe(true);
});
