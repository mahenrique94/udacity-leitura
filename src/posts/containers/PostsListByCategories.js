import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAllByCategory, requestRemove } from '../actions'
import { getAllPosts, getLoadingPosts } from '../selectors'

import { routeHas, getRoute } from 'utils/route'

import App from 'containers/App'

import PostsListPage from '../pages/PostsList'

class PostsListByCategories extends Component {

    static propTypes = {
        getAll: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        match: PropTypes.object.isRequired,
        remove: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { getAll, match } = this.props
        const param = 'category'
        if (routeHas(match, param)) {
            const category = getRoute(match, param)
            getAll(category)
        }
    }

    render() {
        const { list, loading, remove } = this.props
        return (
            <App>
                <PostsListPage list={ list } loading={ loading } remove={ remove }/>
            </App>
        )
    }

}

const mapStateToProps = state => ({
    list: getAllPosts(state),
    loading: getLoadingPosts(state)
})

const mapDispatchToProps = {
    getAll: requestGetAllByCategory,
    remove: id => requestRemove(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListByCategories)
