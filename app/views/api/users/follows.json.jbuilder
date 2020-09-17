json.users do 
  @subs.map do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
json.id @user.id
json.follows @subs.pluck(:id).uniq
