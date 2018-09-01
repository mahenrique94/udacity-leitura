import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAll } from '../actions'
import { getAllPosts, getLoadingPosts } from '../selectors'

import App from 'containers/App'

import PostsListPage from '../pages/PostsList'

class PostsList extends Component {

    static propTypes = {
        getAll: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired
    }

    componentDidMount() {
        const { getAll } = this.props
        getAll()
    }

    render() {
        const { list, loading } = this.props
        return (
            <App>
                <PostsListPage list={ list } loading={ loading }/>
            </App>
        )
    }

}

const mapStateToProps = state => ({
    list: getAllPosts(state),
    loading: getLoadingPosts(state)
})

const mapDispatchToProps = {
    getAll: requestGetAll
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
