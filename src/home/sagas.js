import { actions } from 'constants/ActionsTypes'

import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { addNewTask as addNewTaskAction } from './actions'
import { save } from './api'

const ONE_SECOND = 1000

function* addNewTask({ payload: task }) {
    yield delay(ONE_SECOND)
    const newTask = yield call(save, task)
    yield put(addNewTaskAction(newTask))
}

function* watchAddNewTask() {
    yield takeLatest(actions.HOME_REQUEST_ADD_NEW_TASK, addNewTask)
}

function* homeSaga() {
    yield all([
        watchAddNewTask()
    ])
}

export { homeSaga }
