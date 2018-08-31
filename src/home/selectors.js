const getAllTasks = state => state.get('homeReducer').get('tasks').toJS()
const getLoading = state => state.get('homeReducer').get('loading')

export { getAllTasks, getLoading }
