const getAllCategories = state => state.get('categoriesReducer').get('list').toJS()
const getLoadingCategories = state => state.get('categoriesReducer').get('loading')

export { getAllCategories, getLoadingCategories }
