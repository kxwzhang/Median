if @followers
    json.set! @followers.id do
        json.extract! @followers
    end
else
    json.set! @followees.id do
        json.extract! @followees
    end
end
