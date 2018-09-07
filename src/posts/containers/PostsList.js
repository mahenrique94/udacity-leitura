import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAll, requestRemove } from '../actions'
import { getAllPosts, getLoadingPosts } from '../selectors'

import App from 'containers/App'

import PostsListPage from '../pages/PostsList'

class PostsList extends Component {

    static propTypes = {
        getAll: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        remove: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { getAll } = this.props
        getAll()
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
    getAll: requestGetAll,
    remove: id => requestRemove(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
