import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from './mapconfig';


function PopupMarker(props) {
  const { children, position, detail } = props;

  const openTest = (stuff) => console.log('Got opened! Includes ', stuff);
  const closedTest = () => console.log('Got closed!');

  return (
    <Marker position={position} icon={icon}>
      <Popup onOpen={() => openTest({ detail })} onClose={closedTest} className='customPopup'>
      </Popup>
    </Marker>
  )
};

export default PopupMarker;