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
  Create marker callback, used in the features geo JSON layer
###
createMarker = (feature, latLng)->
  properties = feature.properties
  $icon = $('<div />')

  $icon.attr
    'data-wheelchair': properties.wheelchair
    'data-category': properties.category
    'data-icon': properties.icon

  new L.Marker latLng,
    icon: new Icon($icon)
    title: properties.name
    riseOnHover: true

###
  Exports
###
@wheelmap.map.marker =
  create: createMarker