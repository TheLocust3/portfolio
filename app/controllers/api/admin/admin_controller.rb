class Api::Admin::AdminController < Api::ApiController
  respond_to :json

  def get_current_admin
    begin
      render :json => current_admin
    rescue
      render :json => nil
    end
  end
end
