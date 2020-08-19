export const fetchAllStories = () => (
    $.ajax({
        url: '/api/stories',
        method: 'GET'
    })
);

export const fetchStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'GET'
    })
);

export const createStory = story => (
    $.ajax({
        url: '/api/stories',
        method: 'POST',
        data: { story }
    })
);

export const updateStory = story => (
    $.ajax({
        url: `/api/stories/${story.id}`,
        method: 'PATCH',
        data: { story }
    })
);

export const deleteStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'DELETE'
    })
);g