const getAllComments = state => state.get('commentsReducer').get('list').toJS()
const getComment = state => state.get('commentsReducer').get('comment').toJS()
const getLoadingComments = state => state.get('commentsReducer').get('loading')

export { getAllComments, getComment, getLoadingComments }
