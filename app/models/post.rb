class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :image_url, presence: :true
end
