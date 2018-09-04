import { List } from 'immutable'

import http from 'http'

import { handleError, responseWasOK } from 'utils/http'

import Category from './Category'

const getAll = () =>
    http.get('/categories')
        .then(({ data: { categories: data }, status }) => {
            if (responseWasOK(status)) {
                let categories = List()
                if (Array.isArray(data)) {
                    data.forEach(item => categories = categories.push(new Category(item)))
                }
                return categories
            }
            return List()
        })
        .catch(handleError)

export { getAll }
