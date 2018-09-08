import produce from 'immer'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAllByCategory, requestRemove, requestVote } from '../actions'
import { requestGetAll as requestGetAllCategories } from '@/categories/actions'

import { getAllPosts, getLoadingPosts } from '../selectors'
import { getAllCategories as getAllCategoriesSelector } from '@/categories/selectors'

import { routeHas, getRoute } from 'utils/route'

import App from 'containers/App'

import PostsListPage from '../pages/PostsList'

const PARAM = 'category'

class PostsListByCategories extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        getAll: PropTypes.func.isRequired,
        getAllCategories: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        match: PropTypes.object.isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    state = produce({}, () => ({ actualCategory: '' }))

    componentDidMount() {
        const { getAllCategories } = this.props
        getAllCategories()
        this.getAllPostsByCategory()
    }

    componentWillReceiveProps({ match }) {
        const { actualCategory } = this.state
        const newCategoryToFilter = getRoute(match, PARAM)
        if (newCategoryToFilter !== actualCategory) {
            this.getAllPostsByCategory()
        }
    }

    render() {
        const { categories, list, loading, remove, vote } = this.props
        return (
            <App>
                <PostsListPage categories={ categories } list={ list } loading={ loading } remove={ remove } vote={ vote }/>
            </App>
        )
    }

    getAllPostsByCategory = () => {
        const { getAll, match } = this.props
        if (routeHas(match, PARAM)) {
            const category = getRoute(match, PARAM)
            getAll(category)
            this.setState(
                produce(draftState => {
                    draftState.actualCategory = category
                })
            )
        }
    }

}

const mapStateToProps = state => ({
    categories: getAllCategoriesSelector(state),
    list: getAllPosts(state),
    loading: getLoadingPosts(state)
})

const mapDispatchToProps = {
    getAll: requestGetAllByCategory,
    getAllCategories: requestGetAllCategories,
    remove: id => requestRemove(id),
    vote: (id, type) => requestVote({ id, type })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListByCategories)
