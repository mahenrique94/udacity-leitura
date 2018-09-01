const getAllPosts = state => state.get('postsReducer').get('list').toJS()
const getLoadingPosts = state => state.get('postsReducer').get('loading')

export { getAllPosts, getLoadingPosts }
