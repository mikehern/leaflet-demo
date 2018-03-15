import { MBKEY } from '../config';
import L from 'leaflet';

const tileSet = `https://api.mapbox.com/styles/v1/mikehern/cje36zhaq2kvw2smq8a8r2cjq/tiles/256/{z}/{x}/{y}?access_token=${MBKEY}`;
const SFGeo = [37.752, -122.4312];
const zoomLevel = 11.5;
const mapAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';
const icon = L.icon({
  iconUrl: 'http://rs8.pbsrc.com/albums/a36/BeagleTsuin/48ae1b92129000136a7ca3902811b551.gif~c200',

  iconSize: [40, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export { tileSet, SFGeo, zoomLevel, mapAttribution, icon };