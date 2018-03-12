import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const key = require('../config');
const tileSet = `https://api.mapbox.com/styles/v1/mikehern/cje36zhaq2kvw2smq8a8r2cjq/tiles/256/{z}/{x}/{y}?access_token=${key.MBKEY}`;
const position = [37.752, -122.4312];
const zoomLevel = 11.5;
const mapAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';

const icon = L.icon({
  iconUrl: 'http://rs8.pbsrc.com/albums/a36/BeagleTsuin/48ae1b92129000136a7ca3902811b551.gif~c200',

  iconSize: [40, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position} icon={icon}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, children }) => (
    <MyPopupMarker key={key} position={position} children={children} />
  ));
  return <div>{items}</div>
}


export default class MapView extends Component {

  constructor() {
    super();
    this.state = {
      lat: position[0],
      lng: position[1],
      zoom: zoomLevel
    };
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    const markers = [
      { key: 'marker1', position: [37.73, -122.48], children: 'Its...' },
      { key: 'marker2', position: [37.75, -122.42], children: '...party...' },
      { key: 'marker3', position: [37.74, -122.44], children: '...time!' },
    ];

    return (
      <div>
        <div>{`Zoom level is: ${this.state.zoom}`}</div>
        <Map center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution={mapAttribution}
            url={tileSet}
          >
          </TileLayer>
          <MyMarkersList markers={markers} />
        </Map>
      </div>
    )
  }
}