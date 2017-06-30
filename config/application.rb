require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EventDoneSimple
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # config.paperclip_defaults = {
    #   :storage => :s3,
    #   :s3_credentials => {
    #     :bucket => ENV["s3_bucket"],
    #     :access_key_id => ENV["s3_access_key_id"],
    #     :secret_access_key => ENV["s3_secret_access_key"],
    #     :s3_region => ENV["s3_region"],
    #     :s3_host_name => "s3-#{ENV["s3_region"]}.amazonaws.com",
    #     :url => ":s3_host_name"
    #   }
    # }


    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        :bucket => ENV["s3_bucket"],
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :s3_region => ENV["s3_region"],
        :region => ENV['AWS_REGION'],
        :s3_host_name => "s3-#{ENV["s3_region"]}.amazonaws.com"
      }
    }


    # Do not swallow errors in after_commit/after_rollback callbacks.
  config.active_record.raise_in_transactional_callbacks = true
  end
end
