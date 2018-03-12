import React from 'react';
import MapView from '../mapView';
import { shallow } from 'enzyme';

describe('Initial map loads with markers', () => {
  xit('Displays a map centered on San Francisco', () => {
    const wrapper = shallow(<MapView />);
    const mapLat = wrapper.state().lat;
    expect(mapLat).toEqual(37.752);
  })

  xit('Mapview contains a map', () => {
    const wrapper = shallow(
      <MapView>
        <div className="leaflet-pane" />
      </MapView>
    );
    expect(wrapper.contains(<div className="leaflet-pane" />)).to.equal(true);
  })

  it('Displays the zoom level above the map', () => {
    const wrapper = shallow(
      
      <MapView>
        <div>Zoom level is 11.5</div>
      </MapView>
    )
    expect(wrapper.contains(<div>Zoom level is 11.5</div>)).toEqual(true);
  })
})