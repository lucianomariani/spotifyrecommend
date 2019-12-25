import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Card from './Card'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const image = 'imagetest.jpg'
const title = 'title of card'
const subtitle = 'subtitle of card'


describe('Card ', () => {
  test('renders content', () => {
    const wrapper = shallow(<Card image={image} subtitle={subtitle} title={title}/>);
    expect(wrapper).toMatchSnapshot()
  });
});

