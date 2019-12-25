import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const wrapper = shallow(<App/>);

describe('App ', () => {
  test('renders App', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });
});
