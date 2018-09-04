import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import i18n from 'i18n'

import { inputIsHidden } from 'utils/form'
import { not } from 'utils/functions'

import { Field } from 'react-final-form'
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap'

const FormData = ({ component, id, maxLength, name, required, type }) => (

    <FormGroup>
        { not(inputIsHidden(type)) && <Label for={ id }>{ i18n.t(`label.${name}`) }</Label> }
        <Field component={ component } id={ id } maxLength={ maxLength } name={ name } required={ required } type={ type }>
            { ({ input, id: idInput, maxLength: inputMaxLength, meta, required: requiredInput, type: typeInput }) => (
                <Fragment>
                    <Input
                        { ...input }
                        id={ idInput }
                        invalid={ not(_.isUndefined(meta.error)) }
                        maxLength={ inputMaxLength }
                        required={ requiredInput }
                        type={ typeInput }
                    />
                    { meta.error && <FormFeedback>{ i18n.t(`form.errors.${meta.error}`) }</FormFeedback> }
                </Fragment>
            ) }
        </Field>
    </FormGroup>

)

FormData.defaultProps = {
    maxLength: 999999999,
    required: false,
    type: ''
}

FormData.propTypes = {
    component: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string
}

export default FormData
