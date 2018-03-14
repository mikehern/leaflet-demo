import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import CustomPopup from './customPopup.jsx';

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

const openTest = (stuff) => console.log('Got opened! Includes ', stuff);
const closedTest = () => console.log('Got closed!');

const customStyle = {
  backgroundColor: 'yellow',
  color: 'green',
  width: window.innerWidth,
};


const MyPopupMarker = ({ children, position, detail }) => (
  <Marker position={position} icon={icon}>
    <Popup onOpen={() => openTest({detail})} onClose={closedTest} className='customPopup'>
      <div style={customStyle}>
        <span>{children}</span>
        <br />
        <CustomPopup />
        <br />
        <span>hours: {detail.hours}</span>
        <br />
        <span>wifi: {`${detail.hasWifi}`}</span>
        <br />
        <span>coffee: {detail.hasCoffee}</span>
      </div>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, children, detail }) => (
    <MyPopupMarker key={key} 
      position={position} 
      children={children} 
      detail={detail}
    />
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

  clickHandler = () => {
    console.log('hi')
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    const markers = [
      { key: 'marker1', position: [37.73, -122.48], children: 'Its...', detail: {
          hours: '11 to 7',
          hasWifi: true,
          hasCoffee: false,
        } 
      },
      { key: 'marker2', position: [37.75, -122.42], children: '...party...', detail: {
          hours: '9 to 6',
          hasWifi: false,
          hasCoffee: true,
        } 
      },
      { key: 'marker3', position: [37.74, -122.44], children: '...time!', detail: {
          hours: '11 to 4',
          hasWifi: false,
          hasCoffee: false,
        } 
      },
    ];

    return (
      <div>
        <CustomPopup />
        <div>{`Zoom level is: ${this.state.zoom}`}</div>
        <Map center={center} zoom={this.state.zoom} >
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