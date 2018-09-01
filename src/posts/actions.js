import { actions } from 'constants/ActionsTypes'

import { createAction } from 'redux-actions'

const getAll = createAction(actions.POSTS_GET_ALL)
const requestGetAll = createAction(actions.POSTS_REQUEST_GET_ALL)

export { getAll, requestGetAll }
