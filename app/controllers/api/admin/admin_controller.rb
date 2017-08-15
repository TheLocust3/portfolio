class Api::Admin::AdminController < Api::ApiController
  respond_to :json

  def get_current_admin
    render :json => current_admin
  end
end
