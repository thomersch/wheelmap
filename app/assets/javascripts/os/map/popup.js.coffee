#= require ./map

###
  Bind popup to marker if no popup was bound before
###
bindPopup = (marker)->
  nodeId = marker.feature.properties.id
  popup = L.popup()

  marker.bindPopup(popup, offset: [0, -24])

  requestContent(popup, marker)

  return

###
  Request popup content
###
requestContent = (popup, marker)->
  nodeId = marker.feature.properties.id

  $.ajax("/nodes/#{nodeId}/popup")
    .success (response)->
      $content = $(response)
      attachEvents(popup, $content)

      popup.setContent(response)

attachEvents = (popup, element)->
  $element = $(element)

  popup.on 'contentupdate', (event)->
    $element.trigger("map-popup:#{event.type}", event)

###
  Exports
###
@wheelmap.map.popup =
  bind: bindPopup