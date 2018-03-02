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

  constructor(){
    super();
    this.state = {
      hasLocation: false,
      latlng: {
        lat: 37.752,
        lng: -122.4318
      },
      currentZoomLevel: 11.5
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleLocationFound = this.handleLocationFound.bind(this);
  }

  componentDidMount() {
    console.log('after component mounted, state is: ', this.state);
  }

  handleClick() {
    console.log('clicked! center is: ', this.clickInput.leafletElement.getCenter());
    console.log('clicked! zoom is: ', this.clickInput.leafletElement.getZoom());
    console.log('clicked! bounds is: ', this.clickInput.leafletElement.getBounds());
    console.log('clicked! size is: ', this.clickInput.leafletElement.getSize());
    console.log('clicked! pixelBounds is: ', this.clickInput.leafletElement.getPixelBounds());
    console.log('clicked! pixelOrigin is: ', this.clickInput.leafletElement.getPixelOrigin());
    console.log('clicked! panes is: ', this.clickInput.leafletElement.getPanes());
    console.log('clicked! container is: ', this.clickInput.leafletElement.getContainer());
  }

  handleLocationFound(e){
    this.setState({
      hasLocation: true,
      latlng: <e className="latlng"></e>,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng} icon={icon}>
        <Popup>
          <span>You have arrived.</span>
        </Popup>
      </Marker>
    ) : null;

    return(
      <div>
        <Map
          center={this.state.latlng}
          onClick={this.handleClick}
          onLocationFound={this.handleLocationFound}
          ref={(input) => {this.clickInput = input;}}
          zoom={this.state.currentZoomLevel}
          animate={true}
        >
          <TileLayer
            url={tileSet}
            attribution={mapAttribution}
          />
          {marker}
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