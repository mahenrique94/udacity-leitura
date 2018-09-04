import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestGetAll } from '@/categories/actions'
import { getAllCategories as getAllCategoriesSelector } from '@/categories/selectors'

import App from 'containers/App'

import PostsFormPage from '../pages/PostsForm'

class PostsForm extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        getAllCategories: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { getAllCategories } = this.props
        getAllCategories()
    }

    render() {
        const { categories } = this.props
        return (
            <App>
                <PostsFormPage categories={ categories }/>
            </App>
        )
    }

}

const mapStateToProps = state => ({
    categories: getAllCategoriesSelector(state)
})

const mapDispatchToProps = {
    getAllCategories: requestGetAll
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm)
