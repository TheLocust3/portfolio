class Admin < ApplicationRecord
  devise :database_authenticatable, :trackable, :timeoutable, :validatable
end
