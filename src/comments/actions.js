import { actions } from 'constants/ActionsTypes'

import { createAction } from 'utils/actions'

const edit = createAction(actions.COMMENTS_EDIT)
const getAll = createAction(actions.COMMENTS_GET_ALL)
const remove = createAction(actions.COMMENTS_REMOVE)
const requestEdit = createAction(actions.COMMENTS_REQUEST_EDIT)
const requestGetAll = createAction(actions.COMMENTS_REQUEST_GET_ALL)
const requestRemove = createAction(actions.COMMENTS_REQUEST_REMOVE)
const requestSave = createAction(actions.COMMENTS_REQUEST_SAVE)
const requestVote = createAction(actions.COMMENTS_REQUEST_VOTE)
const save = createAction(actions.COMMENTS_SAVE)
const vote = createAction(actions.COMMENTS_VOTE)

export {
    edit,
    getAll,
    remove,
    requestEdit,
    requestGetAll,
    requestRemove,
    requestSave,
    requestVote,
    save,
    vote
}
