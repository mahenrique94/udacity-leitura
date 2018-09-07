import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestEdit, requestSave } from '../actions'
import { requestGetAll } from '@/categories/actions'

import { getAllCategories as getAllCategoriesSelector } from '@/categories/selectors'
import { getPost } from '../selectors'

import { getRouteId, routeHasId } from 'utils/route'

import App from 'containers/App'

import PostsFormPage from '../pages/PostsForm'

import Post from '../Post'

class PostsForm extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        edit: PropTypes.func.isRequired,
        getAllCategories: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        post: PropTypes.objectOf(Post).isRequired,
        save: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { edit, getAllCategories, match } = this.props
        getAllCategories()

        if (routeHasId(match)) {
            const postId = getRouteId(match)
            edit(postId)
        }
    }

    render() {
        const { categories, post, save } = this.props
        return (
            <App>
                <PostsFormPage categories={ categories } post={ post } save={ save }/>
            </App>
        )
    }

}

const mapStateToProps = state => ({
    categories: getAllCategoriesSelector(state),
    post: getPost(state)
})

const mapDispatchToProps = {
    edit: id => requestEdit(id),
    getAllCategories: requestGetAll,
    save: values => requestSave(values)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm)
