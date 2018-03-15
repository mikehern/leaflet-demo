import React from 'react';
import { markers } from './markerData';
import PopupMarker from './popupMarker.jsx';

const MarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, children, detail }) => (
    <PopupMarker
      key={key}
      position={position}
      children={children}
      detail={detail}
    />
  ));
  
  return (
    <div>{items}</div>
  );
};

export default MarkersList;