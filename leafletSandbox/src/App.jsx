import React, { Component } from 'react';
import MapView from './mapView.jsx';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <MapView />
    <div>Coming at you from ReacDom.render within app.jsx.</div>
  </div>,
  document.getElementById('app')
);