import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Form as BootstrapForm } from 'reactstrap'
import { Form as FinalForm } from 'react-final-form'

import FormActions from './FormActions'

class Form extends Component {

    static propTypes = {
        cancelTo: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        onSubmit: PropTypes.func.isRequired,
        validate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.finalForm = React.createRef()
    }

    render() {
        const { cancelTo, children, onSubmit, validate } = this.props
        return (
            <FinalForm onSubmit={ onSubmit } ref={ this.finalForm } validate={ validate }>
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
