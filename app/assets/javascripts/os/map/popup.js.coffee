#= require ./map
#= require js-routes

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

  $.ajax(wheelmap.routes.popup_node_path(nodeId))
    .success (response)->
      createPopup(marker, response)
      marker.openPopup()

      return

###
  Exports
###
@wheelmap.map.popup =
  request: requestContent