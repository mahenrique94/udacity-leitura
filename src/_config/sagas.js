import { all } from 'redux-saga/effects'

import { sagas as categoriesSagas } from '@/categories/sagas'
import { sagas as commentsSagas } from '@/comments/sagas'
import { sagas as postsSagas } from '@/posts/sagas'

function* sagas() {
    yield all([
        categoriesSagas(),
        commentsSagas(),
        postsSagas()
    ])
}

export { sagas }
