import { actions } from 'constants/ActionsTypes'

import { createAction } from 'utils/actions'

const getAll = createAction(actions.CATEGORIES_GET_ALL)
const requestGetAll = createAction(actions.CATEGORIES_REQUEST_GET_ALL)

export { getAll, requestGetAll }
