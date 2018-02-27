import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const key = require('../config');
const tileSet = `https://api.mapbox.com/styles/v1/mikehern/cje36zhaq2kvw2smq8a8r2cjq/tiles/256/{z}/{x}/{y}?access_token=${key.MBKEY}`;
const position = [37.752, -122.4312];
const zoomLevel = 11.5;
const mapAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';
const icon = L.icon({
  iconUrl: 'http://www.allwhitebackground.com/images/1/Marker-3.jpg',

  iconSize: [40, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


export class MapView extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentZoomLevel: 11.5
    }
  }

  render() {
    return(
      <div>
        <Map
          center={position}
          zoom={this.state.currentZoomLevel}
        >
          <TileLayer
            url={tileSet}
            attribution={mapAttribution}
          />
          <Marker position={position} icon={icon}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <MapView />
    <div>Coming at you from ReacDom.render within app.jsx.</div>
  </div>,
  document.getElementById('app')
);