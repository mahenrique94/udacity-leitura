import { List } from 'immutable'

import http from 'http'

import { handleError, responseWasOK } from 'utils/http'

import Post from './Post'

const list = () =>
    http.get('/posts')
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                let posts = List()
                data.forEach(item => posts = posts.push(new Post(item)))
                return posts
            }
            return []
        })
        .catch(handleError)

export { list }
