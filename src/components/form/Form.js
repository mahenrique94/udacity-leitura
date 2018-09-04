import PropTypes from 'prop-types'
import React from 'react'

import { Form as BootstrapForm } from 'reactstrap'
import { Form as FinalForm } from 'react-final-form'

import FormActions from './FormActions'

const Form = ({ cancelTo, children, onSubmit, validate }) => (

    <FinalForm onSubmit={ onSubmit } validate={ validate }>
        { ({ handleSubmit, pristine, invalid }) => (
            <BootstrapForm onSubmit={ handleSubmit }>
                { children }
                <FormActions canSubmit={ pristine || invalid } cancelTo={ cancelTo }/>
            </BootstrapForm>
        ) }
    </FinalForm>

)

Form.propTypes = {
    cancelTo: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired
}

export default Form
