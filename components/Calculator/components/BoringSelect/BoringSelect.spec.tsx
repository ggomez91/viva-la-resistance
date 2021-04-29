import React from "react";
import renderer from "react-test-renderer";
import BoringSelect from "./BoringSelect";

describe("BoringSelect", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BoringSelect color={"red"} setColor={jest.fn()} title="field name" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
