class Api::Admin::SessionsController < Devise::SessionsController
  respond_to :json
end
