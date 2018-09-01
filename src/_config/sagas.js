import { all } from 'redux-saga/effects'

import { sagas as postsSagas } from '@/posts/sagas'

function* sagas() {
    yield all([
        postsSagas()
    ])
}

export { sagas }
