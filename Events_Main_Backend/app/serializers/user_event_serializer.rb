class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :user_id
end
