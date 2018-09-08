import PropTypes from 'prop-types'
import React from 'react'

import CommentActions from './CommentActions'

import CommentModel from '@/comments/Comment'

const CommentFooter = ({ comment, edit, remove, vote }) =>
    <CommentActions comment={ comment } edit={ edit } remove={ remove } vote={ vote }/>

CommentFooter.propTypes = {
    comment: PropTypes.objectOf(CommentModel).isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default CommentFooter
