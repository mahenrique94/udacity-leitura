import { routes } from '../routes'

import PostsList from '../containers/PostsList'

describe('Tests for routes of the PostsList component', () => {

    it('Should each match routes with your respective value', () => {
        const expectedRoutes = [
            { component: PostsList, name: 'postsList', path: '/posts' }
        ]
        expect(routes).toEqual(expectedRoutes)
    })

})
