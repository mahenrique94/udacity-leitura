import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Delete from './Delete'
import Edit from './Edit'
import Vote from './Vote'

import Post from '@/posts/Post'

const StyledActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
`

const Actions = ({ className, edit, link, obj, remove, vote }) => (

    <StyledActions className={ className }>
        <Vote obj={ obj } vote={ vote }/>
        <Edit edit={ edit } link={ link } obj={ obj }/>
        <Delete obj={ obj } remove={ remove }/>
    </StyledActions>

)

Actions.defaultProps = {
    className: '',
    edit: null,
    link: ''
}

Actions.propTypes = {
    className: PropTypes.string,
    edit: PropTypes.func,
    link: PropTypes.string,
    obj: PropTypes.objectOf(Post).isRequired,
    remove: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired
}

export default Actions
