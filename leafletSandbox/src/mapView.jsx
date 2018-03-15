import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { tileSet, SFGeo, zoomLevel, mapAttribution, icon } from './mapconfig';
import { markers } from './markerData';

import CustomPopup from './customPopup.jsx';
import ReactModal from 'react-modal';
import PopupMarker from './popupMarker.jsx';
import MarkersList from './markersList.jsx';


export default class MapView extends Component {
  constructor() {
    super();
    this.state = {
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      displayModal: false,
    };
  };
  
  render() {
    const center = [this.state.lat, this.state.lng];
    return (
      <div>
        <ReactModal isOpen={this.state.displayModal} />
        <CustomPopup />
        <div>{`Zoom level is: ${this.state.zoom}`}</div>
        <Map center={this.state.center} zoom={this.state.zoom} >
          <TileLayer attribution={mapAttribution}url={tileSet} />
          <MarkersList markers={markers} />
        </Map>
      </div>
    );
  };
};