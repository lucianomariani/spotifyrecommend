import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import {TrackPage} from './TrackPage'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()});

const error = false
const loading = false
const match= {
  params: {
    id:'1'
  }
}
const track = {
  id: '12345',
  name: 'Track name'
}
const fetchTrack = () => {
  return null
}
describe('TrackPage ', () => {
test('renders Spinner if loading ', () => {
    const loading = true
    const wrapper = mount(<TrackPage track={track} match={match} fetchTrack={fetchTrack} loading={loading} error={error}/>);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  test('renders errorMessage if error ', () => {
    const error = true
    const errorMessage = 'Error Message'
    const wrapper = mount(<TrackPage  track={track} match={match} fetchTrack={fetchTrack} loading={loading} error={error} errorMessage={errorMessage}/>);
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  }); /**/

});


