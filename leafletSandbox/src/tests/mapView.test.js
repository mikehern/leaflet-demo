import React from 'react';
import MapView from '../mapView';
import { shallow } from 'enzyme';

describe('Initial map loads with markers', () => {
  it('Displays a map centered on San Francisco', () => {
    const wrapper = shallow(<MapView />);
    const mapLat = wrapper.state().lat;
    expect(mapLat).toEqual(37.752);
  })
})