if @followers
    @followers.each do |follower|
        json.set! follower.id do
            json.extract! follower, :id, :username
        end
    end
else
    @followees.each do |followee| 
        json.set! followee.id do
            json.extract! followee, :id, :username
        end
    end
end
