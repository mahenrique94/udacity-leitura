import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { requestSave } from '../actions'

import { getComment } from '../selectors'

import CommentsFormPage from '../pages/CommentsForm'

import Comment from '../Comment'

class CommentsForm extends Component {

    static propTypes = {
        comment: PropTypes.objectOf(Comment).isRequired,
        loading: PropTypes.bool.isRequired,
        postId: PropTypes.string.isRequired,
        save: PropTypes.func.isRequired
    }

    render() {
        const { comment, loading, postId, save } = this.props
        return <CommentsFormPage comment={ comment } loading={ loading } postId={ postId } save={ save }/>
    }

}

const mapDispatchToProps = {
    save: values => requestSave(values)
}

const mapStateToProps = state => ({
    comment: getComment(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm)
