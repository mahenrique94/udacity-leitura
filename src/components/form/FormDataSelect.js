import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { not } from 'utils/functions'

import { Input } from 'reactstrap'

const FormDataSelect = ({ id, input, meta, optionText, optionValue, options, required }) => (

    <Input { ...input } id={ id } invalid={ not(_.isUndefined(meta.error)) } required={ required } type="select">
        <option/>
        { options.map(option => <option key={ option[optionValue] } value={ option[optionValue] }>{ option[optionText] }</option>) }
    </Input>

)

FormDataSelect.propTypes = {
    id: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    optionText: PropTypes.string.isRequired,
    optionValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool.isRequired
}

export default FormDataSelect
