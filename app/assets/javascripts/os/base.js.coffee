#= require os/map/map
#= require os/map/features

$document = $(document)
wheelmap = @wheelmap

# Variable to store last padded bounds to restrict loading of new markers
_lazyBounds = null

###
  Track move start on maps to initialize last bounds
###
$document.on 'map:movestart', (event, mapEvent)->
  unless _lazyBounds?
    _lazyBounds = mapEvent.target.getBounds().pad(0.42)

  return

###
  Track move end on maps to load
###
$document.on 'map:moveend map:zoomend', (event, mapEvent)->
  map = mapEvent.target
  newBounds = map.getBounds()

  # If we have a zoom event, we always do a feature request
  # Check if new bounds are out of lazy bounds to load new markers
  unless event.type is 'map:zoomend' or _lazyBounds? and !_lazyBounds.contains(newBounds)
    return

  wheelmap.map.features.request(map, newBounds)
  _lazyBounds = null

  return

###
  Add/remove loading spinner
###
$document.on 'map:requestfeaturesstart map:requestfeaturesend map:requestfeaturesabort', (event, map)->
  # If event comes from feature request start start spinner
  map.spin(event.type is 'map:requestfeaturesstart');

  return

###
  Initialize maps when dom is ready or pjax loaded new content
###
$document.on 'ready pjax:end', (event)->
  $('[data-map]').map()

###
  Load markers
###
$document.on 'map:init', (event, map)->
  wheelmap.map.features.request(map, map.getBounds())