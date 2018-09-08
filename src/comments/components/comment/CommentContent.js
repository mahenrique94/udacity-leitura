import PropTypes from 'prop-types'

import CommentModel from '@/comments/Comment'

const CommentContent = ({ comment: { body } }) => body

CommentContent.propTypes = {
    comment: PropTypes.objectOf(CommentModel).isRequired
}

export default CommentContent
