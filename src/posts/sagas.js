import { actions } from 'constants/ActionsTypes'

import _ from 'lodash'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { List } from 'immutable'

import i18n from 'i18n'

import { routes } from 'routes'

import { getAll as getAllAPI, save as saveAPI } from './api'

import { getAll } from './actions'

import { getAction } from 'utils/actions'
import { navigateTo } from 'utils/browser'

import Notifications from 'react-notification-system-redux'

function* getAllRequested() {
    const posts = yield call(getAllAPI)
    if (_.isUndefined(posts)) {
        yield put(getAll(List()))
    } else {
        yield put(getAll(posts))
    }
}

function* saveRequested({ payload }) {
    yield call(saveAPI, payload)
    yield put(Notifications.success({
        message: i18n.t('notifications.messages.api.posts.saved'),
        title: i18n.t('notifications.titles.success')
    }))
    yield navigateTo(routes.postsList)
}

function* watchRequestGetAll() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_GET_ALL), getAllRequested)
}

function* watchRequestSave() {
    yield takeLatest(getAction(actions.POSTS_REQUEST_SAVE), saveRequested)
}

function* sagas() {
    yield all([
        watchRequestGetAll(),
        watchRequestSave()
    ])
}

export { sagas }
