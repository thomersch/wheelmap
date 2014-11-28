#= require ./map

###
  Extension of the leaflet icon simply passing an element to the corresponding marker
###
Icon = L.Icon.extend
  initialize: (element)->
    @$element = $(element)

    return

  createIcon: ->
    @$element.addClass('leaflet-marker-icon')[0]

  createShadow: ->
    null

###
  Create marker and bind popup. Used in the geo JSON layer
###
createMarker = (feature, latLng)->
  properties = feature.properties
  $icon = $('<div />')

  $icon.attr
    'data-wheelchair': properties.wheelchair
    'data-category': properties.category
    'data-icon': properties.icon

  marker = new L.Marker latLng,
    icon: new Icon($icon)
    title: properties.name
    riseOnHover: true

  attachEvents(marker, $icon)

  $icon.data('marker', marker)

  marker

###
  Delegate marker events to dom events
###
attachEvents = (marker, element)->
  $element = $(element)

  marker.on 'click popupopen popupclose', (event)->
    $element.trigger("map-marker:#{event.type}", event)
    return

  return

###
  Exports
###
@wheelmap.map.marker =
  create: createMarker