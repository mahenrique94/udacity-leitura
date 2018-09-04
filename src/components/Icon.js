import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ className, icon }) => <FontAwesomeIcon className={ className } icon={ icon }/>

Icon.defaultProps = {
    hasSpace: false,
    withMargin: false
}

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    hasSpace: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    withMargin: PropTypes.bool
}

const StyledIcon = styled(Icon)`
    ${({ hasSpace }) => hasSpace ? 'margin-right: .5rem' : ''}
    ${({ withMargin }) => withMargin ? 'margin-right: .25rem' : ''}
`

export default StyledIcon
