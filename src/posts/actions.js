import { actions } from 'constants/ActionsTypes'

import { createAction } from 'redux-actions'

const getAll = createAction(actions.POSTS_LIST)
const requestGetAll = createAction(actions.POSTS_REQUEST_LIST)

export { getAll, requestGetAll }
