import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestEdit, requestRemove, requestVote } from '../actions'

import { getPost } from '../selectors'

import { routeHas, getRoute } from 'utils/route'

import App from 'containers/App'

import CommentsList from '@/comments/containers/CommentsList'
import PostsDetailsPage from '../pages/PostsDetails'

import Post from '../Post'

class PostsDetails extends Component {

    static propTypes = {
        edit: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        post: PropTypes.objectOf(Post).isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { edit } = this.props
        edit(this.getPostId())
    }

    render() {
        const { post, remove, vote } = this.props
        return (
            <App>
                <PostsDetailsPage post={ post } remove={ remove } vote={ vote }/>
                <CommentsList postId={ this.getPostId() }/>
            </App>
        )
    }

    getPostId = () => {
        const { match } = this.props
        if (routeHas(match, 'category') && routeHas(match, 'postId')) {
            return getRoute(match, 'postId')
        }
        return null
    }

}

const mapDispatchToProps = {
    edit: postId => requestEdit(postId),
    remove: id => requestRemove(id),
    vote: (id, type) => requestVote({ id, type })
}

const mapStateToProps = state => ({
    post: getPost(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails)
