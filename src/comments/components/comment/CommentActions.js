import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Actions from 'components/Actions'

import Comment from '@/comments/Comment'

const StyledActions = styled(Actions)`
    width: 100%;
`

const PostActions = ({ edit, comment, remove, vote }) =>
    <StyledActions edit={ edit } obj={ comment } remove={ remove } vote={ vote }/>

PostActions.propTypes = {
    comment: PropTypes.objectOf(Comment).isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default PostActions
