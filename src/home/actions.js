import { actions } from "constants/ActionsTypes"

import { createAction } from "redux-actions"

const addNewTask = createAction(actions.HOME_ADD_NEW_TASK)

export { addNewTask }
