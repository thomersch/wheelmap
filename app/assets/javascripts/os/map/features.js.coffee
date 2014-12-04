#= require ./map
#= require ./marker

lastRequest = null
wheelmap = @wheelmap

###
  Request features
###
requestFeatures = (map, bounds)->
  $map = $(map.getContainer())

  requestEvent = $.Event('map-features:requeststart')
  $map.trigger(requestEvent, map, bounds)

  if requestEvent.isDefaultPrevented()
    return

  if lastRequest?
    lastRequest.abort()
    $map.trigger('map-features:requestabort', map, bounds)

  lastRequest = $.ajax '/nodes.geojson',
    data:
      bbox: bounds.toBBoxString()
      limit: 400

  lastRequest.done (features)->
    $map.trigger('map-features:requestend', map, features)
    addFeatures(map, features)
    lastRequest = null

    return

  return

###
  Add features to map
###
addFeatures = (map, features)->
  $map = $(map.getContainer())

  addEvent = $.Event('map-features:addstart')
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

  $map.trigger('map-features:addend', map, geoJsonLayer)

  return

###
  Exports
###
@wheelmap.map.features =
  request: requestFeatures