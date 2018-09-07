import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Form as BootstrapForm } from 'reactstrap'
import { Form as FinalForm } from 'react-final-form'

import FormActions from './FormActions'

class Form extends Component {

    static defaultProps = {
        initialValues: {}
    }

    static propTypes = {
        cancelTo: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        initialValues: PropTypes.object,
        onSubmit: PropTypes.func.isRequired,
        validate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.finalForm = React.createRef()
    }

    render() {
        const { cancelTo, children, initialValues, onSubmit, validate } = this.props

        return (
            <FinalForm initialValues={ initialValues } onSubmit={ onSubmit } ref={ this.finalForm } validate={ validate }>
                { ({ handleSubmit, pristine, invalid }) => (
                    <BootstrapForm onSubmit={ handleSubmit }>
                        { children }
                        <FormActions canSubmit={ pristine || invalid } cancelTo={ cancelTo }/>
                    </BootstrapForm>
                ) }
            </FinalForm>
        )
    }

}

export default Form
