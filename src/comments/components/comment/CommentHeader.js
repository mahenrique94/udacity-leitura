import PropTypes from 'prop-types'
import React from 'react'

import { Media } from 'reactstrap'

import CommentModel from '@/comments/Comment'

const CommentHeader = ({ comment: { author } }) => <Media heading>{ author }</Media>

CommentHeader.propTypes = {
    comment: PropTypes.objectOf(CommentModel).isRequired
}

export default CommentHeader
