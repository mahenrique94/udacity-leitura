import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { not } from 'utils/functions'

const cloneChildren = (children, aditionalProps) => {
    if (not(_.isNull(children))) {
        const { props, type } = children
        const { children: propsChildren } = props
        return React.createElement(type, { ...props, ...aditionalProps }, propsChildren)
    }
    return null
}

cloneChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]).isRequired
}

export { cloneChildren }
