import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import TopBar from './TopBar'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const title = 'This is the Title of the section'

describe('TopBar ', () => {
  it('renders text', () => {
  const wrapper = shallow(<TopBar>{title}</TopBar>);
  expect(wrapper.text()).not.toBe('');
  })
});