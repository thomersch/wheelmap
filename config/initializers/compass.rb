require 'compass'
# If you have any compass plugins, require them here.
Compass.add_project_configuration(File.join(Rails.root, "config", "compass.config"))
Compass.configuration do |config|
  config.project_path = Rails.root.to_s
  config.environment = Rails.env.to_sym
  config.sass_dir = "app/stylesheets"
  config.css_dir = "public/stylesheets"
  config.output_style = (config.environment == :production) ? :compressed : :expanded
  config.line_comments = (config.environment == :production) ? false : true
end
Compass.configure_sass_plugin!
