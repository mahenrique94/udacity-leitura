import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Media } from 'reactstrap'

import CommentContent from './CommentContent'
import CommentFooter from './CommentFooter'
import CommentHeader from './CommentHeader'

import CommentModel from '@/comments/Comment'

const StyledComment = styled(Media)`
    flex-direction: column;
`

const Comment = ({ comment, edit, remove, vote }) => (

    <StyledComment className="mt-5">
        <Media body>
            <CommentHeader comment={ comment }/>
            <CommentContent comment={ comment }/>
        </Media>
        <CommentFooter comment={ comment } edit={ edit } remove={ remove } vote={ vote }/>
    </StyledComment>

)

Comment.propTypes = {
    comment: PropTypes.objectOf(CommentModel).isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default Comment
