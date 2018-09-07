import PostsDetails from './containers/PostsDetails'
import PostsForm from './containers/PostsForm'
import PostsList from './containers/PostsList'
import PostsListByCategories from './containers/PostsListByCategories'

const routes = [
    { component: PostsList, name: 'postsList', path: '/posts' },
    { component: PostsForm, name: 'postsForm', path: '/posts/form' },
    { component: PostsForm, path: '/posts/:id' },
    { component: PostsListByCategories, name: 'postsCategories', path: '/:category' },
    { component: PostsDetails, name: 'postsDetails', path: '/:category/:postId' }
]

export { routes }
