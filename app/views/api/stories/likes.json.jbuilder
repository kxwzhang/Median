json.extract! @story, :id, :title, :subtitle, :body, :author_id
json.author @story.author.username
json.photoUrl (@story.photo.attached? ? url_for(@story.photo.variant(resize: "700x700")) : nil)
json.commentsByParent @story.comments_by_parent
json.commenters @story.comment_username
json.numLikes @story.likes.length
json.likedByCurrentUser !!@story.likes.find_by(liker_id: current_user.id)