---
---

var JekyllMaps = function ( options ) {
  this.options = options || {};
  this.map;
  this.gj;
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
  L.tileLayer(this.options.tileset, {
    attribution: '<a target="_blank" href="https://github.com/svmatthews/jekyll-maps">Jekyll Maps</a> | Tiles: Stamen & OSM'
  }).addTo(this.map);

  this.gj = L.geoJson(this.data);
  this.gj.addTo(this.map);

  this.map.fitBounds(this.gj.getBounds());
}