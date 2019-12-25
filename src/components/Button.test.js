import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Button from './Button'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const wrapper = shallow(<Button/>);

describe('Button ', () => {
  test('renders ', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('have text', () => {
    expect(wrapper.text()).not.toBe('');
  });
});



