json.extract! story, :id, :title, :subtitle, :body, :author_id
json.author story.author.username
json.photoUrl url_for(story.photo)