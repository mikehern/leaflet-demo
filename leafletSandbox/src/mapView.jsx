import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import CustomPopup from './customPopup.jsx';
import { tileSet, SFGeo, zoomLevel, mapAttribution, icon } from './mapconfig';
import { markers } from './markerData';

import ReactModal from 'react-modal';


//TODO: keep testable popup scope in render
const openTest = (stuff) => console.log('Got opened! Includes ', stuff);
const closedTest = () => console.log('Got closed!');


//TODO: move popup-wrapped marker to file
const MyPopupMarker = ({ children, position, detail }) => (
  <Marker position={position} icon={icon}>
    <Popup onOpen={() => openTest({detail})} onClose={closedTest} className='customPopup'>
    </Popup>
  </Marker>
);

//TODO: move marker list to file
const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, children, detail }) => (
    <MyPopupMarker
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