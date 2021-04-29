import React from "react";
import renderer from "react-test-renderer";
import ColorSelect from "./ColorSelect";

describe("ColorSelect", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ColorSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
