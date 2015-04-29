---
---

var JekyllMaps = function () {
  this.map;
  this.data = {
    type: 'FeatureCollection',
    features: [
      {% for post in site.posts %}{
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'Point',
          'coordinates': [
            {{ post.lng }},
            {{ post.lat }}
          ]
        }
      },{% endfor %}
    ]
  };

  this._createMap();
}

JekyllMaps.prototype._createMap = function() {
  this.map = L.map('map').setView([0, 0], 1);
  L.tileLayer('{{ site.map-tileset }}', {
    attribution: '{{ site.map-credits }}'
  }).addTo(this.map);

  this.geojson = L.geoJson(this.data);
  this.geojson.addTo(this.map);

  this.map.fitBounds(this.geojson.getBounds());
}