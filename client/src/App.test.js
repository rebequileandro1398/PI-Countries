import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App'
import Home from "../src/components/Home";
import { Provider } from "react-redux";
import store from './store'
import { MemoryRouter } from "react-router-dom";
import Details from "./components/Details";
import LandingPage from "./components/LandingPage";


configure({ adapter: new Adapter() });

describe("App", () => {
  it('la ruta "/" debe renderizar unicamente el componente "LandingPage".', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0)
    expect(wrapper.find(Details)).toHaveLength(0);
  });
});