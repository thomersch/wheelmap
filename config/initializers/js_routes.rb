JsRoutes.setup do |config|
  # Include node routes
  config.include = [/node/]
  # Exclude sensible routes (e.g. api or admin routes)
  config.exclude = [/api_/, /admin_/]
  # Namespace for js route object
  config.namespace = 'wheelmap.routes'
  # Remove _path suffix in path routes generators (only version > 0.9.9)
  # config.compact = true
end