class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  validates :opinion, presence: :true, length: { maximum: 250 }
end
