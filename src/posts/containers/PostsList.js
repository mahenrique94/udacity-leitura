import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAll, requestRemove, requestVote } from '../actions'
import { requestGetAll as requestGetAllCategories } from '@/categories/actions'

import { getAllPosts, getLoadingPosts } from '../selectors'
import { getAllCategories as getAllCategoriesSelector } from '@/categories/selectors'

import App from 'containers/App'

import PostsListPage from '../pages/PostsList'

class PostsList extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        getAll: PropTypes.func.isRequired,
        getAllCategories: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { getAll, getAllCategories } = this.props
        getAll()
        getAllCategories()
    }

    render() {
        const { categories, list, loading, remove, vote } = this.props
        return (
            <App>
                <PostsListPage categories={ categories } list={ list } loading={ loading } remove={ remove } vote={ vote }/>
            </App>
        )
    }

}

const mapStateToProps = state => ({
    categories: getAllCategoriesSelector(state),
    list: getAllPosts(state),
    loading: getLoadingPosts(state)
})

const mapDispatchToProps = {
    getAll: requestGetAll,
    getAllCategories: requestGetAllCategories,
    remove: id => requestRemove(id),
    vote: (id, type) => requestVote({ id, type })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
