# json.stories do 
#   @stories.map do |story|
#     json.set! story.id do
#       json.partial! 'api/stories/story', story: story
#     end
#   end
# end
json.id @story.id
# json.likes @likes.pluck(:id).uniq.length
json.likes @likes.length