import React from "react";
import renderer from "react-test-renderer";
import ResistorTable from "./ResistorTable";
import Enzyme, { mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("ResistorTable", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ResistorTable ohms={50} tolerancePercent={34} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Calculates the minimum and maximum values", () => {
    const wrapper = mount(<ResistorTable ohms={100} tolerancePercent={1} />);
    expect(wrapper.find('[data-testid="max"]').text()).toBe("101 ohms");
    expect(wrapper.find('[data-testid="min"]').text()).toBe("99 ohms");
  });
});
