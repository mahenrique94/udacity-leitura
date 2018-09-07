import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ className, icon, size }) => <FontAwesomeIcon className={ className } icon={ icon } size={ size }/>

Icon.defaultProps = {
    hasLeftSpace: false,
    hasSpace: false,
    size: 'lg',
    withMargin: false
}

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    hasLeftSpace: PropTypes.bool,
    hasSpace: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    withMargin: PropTypes.bool
}

const StyledIcon = styled(Icon)`
    ${({ hasLeftSpace }) => hasLeftSpace ? 'margin-left: .25rem' : ''}
    ${({ hasSpace }) => hasSpace ? 'margin-right: .5rem' : ''}
    ${({ withMargin }) => withMargin ? 'margin-right: .25rem' : ''}
`

export default StyledIcon
