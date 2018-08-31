import { handleActions } from "redux-actions"

import { addNewTask } from "./actions"

import { store } from "./store"

const reducers = handleActions({
    [addNewTask]: (state, { payload }) => ({ ...state, tasks: [].concat(state.tasks, payload) })
}, store)

export { reducers }
