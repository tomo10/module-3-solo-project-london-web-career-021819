class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :date, :image
end
