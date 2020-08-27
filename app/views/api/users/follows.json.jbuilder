@follows.map do |user|
    json.set! user.id do 
        user.username
    end
end