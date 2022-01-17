class CreateSocials < ActiveRecord::Migration[6.1]
  def change
    create_table :socials do |t|
      t.boolean :active
      t.string :href
      t.string :css_class
      t.string :description

      t.timestamps
    end
  end
end
