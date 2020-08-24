class CreateEnquetes < ActiveRecord::Migration[5.1]
  def change
    create_table :enquetes do |t|
      t.integer :beer, default: 0
      t.integer :milk, default: 0

      t.timestamps
    end
  end
end
