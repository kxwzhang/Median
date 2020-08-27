json.extract! user, :id, :username, :email
json.numFollowers user.followers.length
json.numFollowed user.followed_users.length