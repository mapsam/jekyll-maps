Jekyll Maps
===========

**Point-based map engine generated via static Jekyll posts.**

Jekyll Maps allows you to create standard Jekyll posts and show them on a map as points. Posts use the standard `YYYY-MM-DD-your_stuff.markdown` format required for Jekyll, which are used to create a GeoJSON in `js/site.js` and passed into a Leaflet map. 

## Point Options

The point posts require two parameters in the YAML section:

* `lat` - latitude
* `lng` - longitude

**Properties**

The properties of each point are populated dynamically. Properties have two components, the `key` and `value`. To add them to the the GeoJSON object, structure your YAML like this:

```YAML
properties:
    -
        key: name
        value: Seattle, WA
    -
        key: description
        value: Seattle is a coastal seaport city and the seat of King County, in the U.S. state of Washington.
    -
        key: foo
        value: bar
```


## Map Options

Site-wide map options can be changed in `_config.yml`. The include:

* `map-tileset` - the URL of the tiles you'd like to use for the map
* `map-credits` - credits added to the map in the lower right corner