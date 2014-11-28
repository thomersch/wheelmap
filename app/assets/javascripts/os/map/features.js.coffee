#= require ./map
#= require ./marker

lastRequest = null
wheelmap = @wheelmap

###
  Request features
###
requestFeatures = (map, bounds)->
  $map = $(map.getContainer())

  requestEvent = $.Event('map:requestfeaturesstart')
  $map.trigger(requestEvent, map, bounds)

  if requestEvent.isDefaultPrevented()
    return

  if lastRequest?
    lastRequest.abort()
    $map.trigger('map:requestfeaturesabort', map, bounds)

  lastRequest = $.ajax '/nodes.geojson',
    data:
      bbox: bounds.toBBoxString()
      limit: 400

  lastRequest.done (features)->
    $map.trigger('map:requestfeaturesend', map, features)
    addFeatures(map, features)
    lastRequest = null

    return

  return

###
  Add features to map
###
addFeatures = (map, features)->
  $map = $(map.getContainer())

  addEvent = $.Event('map:addfeaturesstart')
  $map.trigger(addEvent, map, features)

  if addEvent.isDefaultPrevented()
    return

  geoJsonLayer = $map.data('geoJsonLayer')

  unless geoJsonLayer?
    $map.data 'geoJsonLayer', geoJsonLayer = new L.GeoJSON null,
      pointToLayer: wheelmap.map.marker.create
    map.addLayer(geoJsonLayer)

  geoJsonLayer.clearLayers()
  geoJsonLayer.addData(features)

  $map.trigger('map:addfeaturesend', map, geoJsonLayer)

  return

###
  Exports
###
@wheelmap.map.features =
  request: requestFeatures