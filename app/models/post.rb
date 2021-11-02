class Post < ApplicationRecord
  belongs_to :user
  validates :image_url, presence: :true
  has_and_belongs_to_many :comments
end
