json.extract! user, :id, :username, :email
json.subscriberCount user.subscribers.length
json.subscriptionCount user.subscriptions.length
json.following current_user.subscriptions.include?(user) if logged_in?