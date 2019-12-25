import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ErrorMessage from './ErrorMessage'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const error = 'There has been an error'

describe('ErrorMessage ', () => {
  test('renders messages', () => {
    const wrapper = shallow(<ErrorMessage>{error}</ErrorMessage>);
    expect(wrapper.text()).not.toBe('');
  });
});

