const getAllPosts = state => state.get('postsReducer').get('list').toJS()
const getLoadingPosts = state => state.get('postsReducer').get('loading')
const getPost = state => state.get('postsReducer').get('post').toJS()

export { getAllPosts, getLoadingPosts, getPost }
