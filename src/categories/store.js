import { List, Record } from 'immutable'

const store = Record({
    list: List(),
    loading: false
})()

export { store }
