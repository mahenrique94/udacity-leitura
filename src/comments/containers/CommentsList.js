import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestEdit, requestGetAll, requestRemove, requestVote } from '../actions'

import { getAllComments, getLoadingComments } from '../selectors'

import CommentsListPage from '../pages/CommentsList'

class CommentsList extends Component {

    static propTypes = {
        edit: PropTypes.func.isRequired,
        getAll: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        postId: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { getAll, postId } = this.props
        getAll(postId)
    }

    render() {
        const { edit, list, loading, remove, vote } = this.props
        return <CommentsListPage edit={ edit } list={ list } loading={ loading } remove={ remove } vote={ vote }/>
    }

}

const mapStateToProps = state => ({
    list: getAllComments(state),
    loading: getLoadingComments(state)
})

const mapDispatchToProps = {
    edit: id => requestEdit(id),
    getAll: requestGetAll,
    remove: id => requestRemove(id),
    vote: (id, type) => requestVote({ id, type })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
