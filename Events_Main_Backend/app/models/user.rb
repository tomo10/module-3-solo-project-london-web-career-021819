class User < ApplicationRecord
    has_many :events
    has_many :user_events
    has_many :events, through: :user_events
end
