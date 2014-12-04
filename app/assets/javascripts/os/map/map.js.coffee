#= require leaflet
#= require leaflet/leaflet.locate
#= require spin
#= require leaflet/leaflet.spin

###
  Default map options
###
defaultMapOptions =
  center: [52.50521, 13.4231]
  zoom: 12

###
  Default tile options
###
defaultTileLayerOptions =
  maxZoom: 19
  minZoom: 2
  detectRetina: true
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png256'
  attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'

###
  Init map
###
initMap = (element)->
  $map = $(element)
  map = L.map($map[0], defaultMapOptions)

  attachEvents(map, $map)

  addMapboxTileLayer(map)
  map.attributionControl.setPrefix('');
  addLocateControl(map)

  map.fire('init')

###
  Add mapbox tile layer
###
addMapboxTileLayer = (map)->
  L.tileLayer(defaultTileLayerOptions.tileUrl, defaultTileLayerOptions).addTo(map);

###
  Add locate me control plugin
###
addLocateControl = (map)->
  L.control.locate().addTo(map)

###
  Add event listener to delegate them to element events
###
attachEvents = (map, element)->
  $element = $(element)

  map.on 'movestart moveend zoomstart zoomend click init requestfeaturesabort requestfeaturesend', (event)->
    $element.trigger("map:#{event.type}", event)
    return

  return

###
  Map jQuery plugin
###
$.fn.map = ->
  @each ->
    $map = $(@)

    unless $map.data('map') instanceof L.Map
      $map.data('map', initMap(@))

    return

###
  Exports
###
@wheelmap.map =
  init: initMap