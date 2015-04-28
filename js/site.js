var map, gj;
window.onload = init();

function init() {
  map = L.map('map').setView([0, 0], 1);
  L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Stamen & OSM'
  }).addTo(map);

  gj = L.geoJson(geojson);
  gj.addTo(map);

  map.fitBounds(gj.getBounds());
}