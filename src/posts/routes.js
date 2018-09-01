import PostsForm from './containers/PostsForm'
import PostsLit from './containers/PostsList'

const routes = [
    { component: PostsLit, name: 'postsList', path: '/posts' },
    { component: PostsForm, name: 'postsForm', path: '/posts/form' },
    { component: PostsForm, path: '/posts/:id' }
]

export { routes }
