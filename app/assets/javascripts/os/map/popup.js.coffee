#= require ./map

###
  Bind popup to marker
###
createPopup = (marker, content)->
  marker.bindPopup(content, offset: [0, -24])

  return

###
  Request popup content
###
requestContent = (marker)->
  nodeId = marker.feature.properties.id

  $.ajax("/nodes/#{nodeId}/popup")
    .success (response)->
      createPopup(marker, response)
      marker.openPopup()

      return

###
  Exports
###
@wheelmap.map.popup =
  request: requestContent