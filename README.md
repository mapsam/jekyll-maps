Jekyll Maps
===========

**Point-based map engine generated via static Jekyll posts.**

Jekyll Maps allows you to create standard Jekyll posts and show them on a map as points. Posts use the standard `YYYY-MM-DD-your_stuff.markdown` format required for Jekyll, which are used to create a GeoJSON in `js/site.js` and passed into a Leaflet map. 

The single posts have two important liquid markup points: `lat:` & `lng:`, which are the location nodes used in the `map.html` consumption.