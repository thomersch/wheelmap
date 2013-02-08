source 'http://rubygems.org'

group :default do
  gem 'rails', '3.0.20'
  gem 'mysql2', '<0.3.0'
  gem 'oauth'
  gem 'devise'
  gem 'compass', '0.10.6'
  gem 'redgreengrid', :git => 'git@github.com:christoph-buente/redgreengrid.git'
  gem 'haml', "3.1.4"
  gem 'sass', "3.1.12"
  gem 'geoip'
  gem 'formtastic', '1.2.4'
  gem 'delayed_job'
  gem 'delayed_job_active_record'
  gem 'daemons'
  gem 'libxml-ruby'
  gem 'crewait', :path => "#{File.expand_path(__FILE__)}/../vendor/gems/crewait-0.1.6"
  gem 'hoptoad_notifier'
  gem 'whenever', :require => false
  gem "routing-filter"
  gem 'newrelic_rpm'
  gem 'acts_as_api'
  gem 'inherited_resources'
  gem 'has_scope'
#  gem 'mapfish'
  gem 'rake'
  gem 'yajl-ruby'
  gem 'ya2yaml'
  gem 'fastercsv'
  gem 'ruport'
  gem 'memcache-client'
  gem 'jammit'
  gem 'big_sitemap', :git => 'git@github.com:sozialhelden/big_sitemap.git'
  gem 'unicorn'
  gem 'rgeo'
  gem 'spatial_adapter'
  gem 'friendly_id', '~>3.3.1' # upgrade to 4.x takes more effort.
  gem 'will_paginate'
  gem 'omniauth-osm'
  gem 'rosemary'
  # gem 'rosemary', :path => '../rosemary'
  gem 'librato-metrics'
  gem 'librato-rails'
  gem 'system_timer' # Optional for librato dependency faraday
  gem 'multipart-post'
  gem 'activeadmin'
  gem 'kaminari'
  gem 'carrierwave'
  gem 'carrierwave-meta'
  gem 'carrierwave_backgrounder', '0.0.9'
  gem 'rmagick'
  gem 'flash_cookie_session'
  gem 'exifr'
  gem 'awesome_nested_set'
  gem 'strong_parameters'
end

group :test, :development do
  gem 'rspec-rails', "2.12.0"
  gem 'spork'
  gem 'rb-fsevent'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-cucumber', "1.2.2"
  gem 'ruby-debug'
  gem 'brakeman'
end

group :test do
  gem 'webmock'
  gem 'factory_girl_rails', "1.6.0"
  gem "capybara", "1.1.1"  # on mac, you need sudo port install libffi
  gem 'cucumber', "1.2.1"
  gem 'cucumber-rails'
  gem 'rspec', "2.12.0"
  gem 'autotest'
  gem 'nokogiri'
  gem 'pickle'
  gem 'launchy'
  gem 'database_cleaner'
  gem 'shoulda-matchers'
  gem 'syntax'
end

group :deployment do
  gem 'capistrano'
  gem 'capistrano-maintenance'
  gem 'capistrano-ext'
end
