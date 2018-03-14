import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import CustomPopup from './customPopup.jsx';
import { tileSet, SFGeo, zoomLevel, mapAttribution, icon } from './mapconfig';
import { markers } from './markerData';

import ReactModal from 'react-modal';
import PopupMarker from './popupMarker.jsx';

//TODO: move marker list to file
const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, children, detail }) => (
    <PopupMarker
      key={key} 
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
      center: [SFGeo[0], SFGeo[1]],
      zoom: zoomLevel,
      displayModal: false,
    };
  }
  
  render() {
    const center = [this.state.lat, this.state.lng];
    return (
      <div>
        <ReactModal isOpen={false} />
        <CustomPopup />
        <div>{`Zoom level is: ${this.state.zoom}`}</div>
        <Map center={this.state.center} zoom={this.state.zoom} >
          <TileLayer attribution={mapAttribution}url={tileSet} />
          <MyMarkersList markers={markers} />
        </Map>
      </div>
    )
  }
}