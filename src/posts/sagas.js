import { actions } from 'constants/ActionsTypes'

import _ from 'lodash'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { List } from 'immutable'

import i18n from 'i18n'

import { routes } from 'routes'

import {
    edit as editAPI,
    getAll as getAllAPI,
    getAllByCategory as getAllByCategoryAPI,
    remove as removeAPI,
    save as saveAPI
} from './api'

import { edit, getAll, getAllByCategory, remove } from './actions'

import { getAction } from 'utils/actions'
import { navigateTo } from 'utils/browser'

import Notifications from 'react-notification-system-redux'

function* editRequested({ payload }) {
    const post = yield call(editAPI, payload)
    yield put(edit(post))
}

function* getAllRequested() {
    const posts = yield call(getAllAPI)
    if (_.isUndefined(posts)) {
        yield put(getAll(List()))
    } else {
        yield put(getAll(posts))
    }
}

function* getAllByCategoryRequested({ payload }) {
    const posts = yield call(getAllByCategoryAPI, payload)
    if (_.isUndefined(posts)) {
        yield put(getAllByCategory(List()))
    } else {
        yield put(getAllByCategory(posts))
    }
}

function* removeRequested({ payload }) {
    const postRemoved = yield call(removeAPI, payload)
    yield put(remove(postRemoved))
}

function* saveRequested({ payload }) {
    yield call(saveAPI, payload)
    yield navigateTo(routes.postsList)
    yield put(Notifications.success({
        message: i18n.t('notifications.messages.api.posts.saved'),
        title: i18n.t('notifications.titles.success')
    }))
}

function* watchRequestEdit() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_EDIT), editRequested)
}

function* watchRequestGetAll() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_GET_ALL), getAllRequested)
}

function* watchRequestGetAllByCategory() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_GET_ALL_BY_CATEGORY), getAllByCategoryRequested)
}

function* watchRequestRemove() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_REMOVE), removeRequested)
}

function* watchRequestSave() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_SAVE), saveRequested)
}

function* sagas() {
    yield all([
        watchRequestEdit(),
        watchRequestGetAll(),
        watchRequestGetAllByCategory(),
        watchRequestRemove(),
        watchRequestSave()
    ])
}

export { sagas }
