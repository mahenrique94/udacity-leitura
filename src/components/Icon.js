
import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, withMargin }) => <FontAwesomeIcon icon={ icon } style={ withMargin ? { marginRight: '.25rem' } : null }/>

Icon.defaultProps = {
    withMargin: false
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    withMargin: PropTypes.bool
}

export default Icon
