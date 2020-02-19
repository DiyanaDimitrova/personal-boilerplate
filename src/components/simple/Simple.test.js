import React from "react";
import { Simple } from "./Simple";
import { shallow } from "enzyme";

describe("Simple Component", () => {
  it("render div", () => {
    const wrapper = shallow(
      <Simple data='Simple App' />
    );
    const div = <div className="simple">Simple App</div>
    expect(wrapper.contains(div)).toBeTruthy();
  });
  it("simulate click", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <Simple clickHandler={mockHandler} />
    );
    wrapper.simulate('click');
    expect(mockHandler).toHaveBeenCalled();
  });
});