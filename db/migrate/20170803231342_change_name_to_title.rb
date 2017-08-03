class ChangeNameToTitle < ActiveRecord::Migration[5.1]
  def change
    rename_column :articles, :name, :title
  end
end
