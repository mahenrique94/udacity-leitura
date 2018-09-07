import { actions } from 'constants/ActionsTypes'

import { createAction } from 'utils/actions'

const edit = createAction(actions.POSTS_EDIT)
const getAll = createAction(actions.POSTS_GET_ALL)
const getAllByCategory = createAction(actions.POSTS_GET_ALL_BY_CATEGORY)
const remove = createAction(actions.POSTS_REMOVE)
const requestEdit = createAction(actions.POSTS_REQUEST_EDIT)
const requestGetAll = createAction(actions.POSTS_REQUEST_GET_ALL)
const requestGetAllByCategory = createAction(actions.POSTS_REQUEST_GET_ALL_BY_CATEGORY)
const requestRemove = createAction(actions.POSTS_REQUEST_REMOVE)
const requestSave = createAction(actions.POSTS_REQUEST_SAVE)
const save = createAction(actions.POSTS_SAVE)

export {
    edit,
    getAll,
    getAllByCategory,
    remove,
    requestEdit,
    requestGetAll,
    requestGetAllByCategory,
    requestRemove,
    requestSave,
    save
}
