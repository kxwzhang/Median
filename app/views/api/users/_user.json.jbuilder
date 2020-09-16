json.extract! user, :id, :username, :email
json.subscriberCount user.subscribers.length
json.subscriptionCount user.subscriptions.length