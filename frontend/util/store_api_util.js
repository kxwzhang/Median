export default fetchAllStories = () => (
    $.ajax({
        url: '/api/stories',
        method: 'GET'
    })
);

export default fetchStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'GET'
    })
);

export default createStory = story => (
    $.ajax({
        url: '/api/stories',
        method: 'POST',
        data: { story }
    })
);

export default updateStory = story => (
    $.ajax({
        url: `/api/stories/${story.id}`,
        method: 'PATCH',
        data: { story }
    })
);

export default deleteStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'DELETE'
    })
);