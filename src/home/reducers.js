import { handleActions } from 'redux-actions'

import { addNewTask, requestAddNewTask } from './actions'

import { store } from './store'

const reducers = handleActions({
    [addNewTask]: (state, { payload: newTask }) => {
        const { tasks } = state
        return state.merge({ loading: false, tasks: tasks.push(newTask) })
    },
    [requestAddNewTask]: state => state.set('loading', true)
}, store)

export { reducers }
