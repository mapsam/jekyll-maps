---
---
var map, gj, 
    posts = {
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

function init() {
  map = L.map('map').setView([0, 0], 1);
  L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Stamen & OSM'
  }).addTo(map);

  console.log(posts);

  gj = L.geoJson(posts);
  gj.addTo(map);

  map.fitBounds(gj.getBounds());
}

window.onload = init();