import { all } from 'redux-saga/effects'

import { sagas as categoriesSagas } from '@/categories/sagas'
import { sagas as postsSagas } from '@/posts/sagas'

function* sagas() {
    yield all([
        categoriesSagas(),
        postsSagas()
    ])
}

export { sagas }
