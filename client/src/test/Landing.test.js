import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from "../components/LandingPage";

configure({ adapter: new Adapter() });

describe("landing Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage/>);
  });

  it("Landing page debe renderizar un link", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('debe redirigir a /home', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/home");
  });
 
});