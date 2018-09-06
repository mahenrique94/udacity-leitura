import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

const If = ({ children, condition, el }) => {

    if (condition) {
        if (_.isFunction(children)) {
            return React.createElement(children)
        }
        return children
    }

    if (_.isFunction(el)) {
        return React.createElement(el)
    }

    return el

}

If.defaultProps = {
    el: null
}

If.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    condition: PropTypes.bool.isRequired,
    el: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.object,
        PropTypes.string
    ])
}

export default If
