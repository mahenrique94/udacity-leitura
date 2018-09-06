import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import i18n from 'i18n'

import { inputIsHidden, isInput } from 'utils/form'
import { not } from 'utils/functions'

import { Field } from 'react-final-form'
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap'

import FormDataSelect from './FormDataSelect'
import If from 'components/If'

const FormData = ({ children, component, id, maxLength, name, optionText, optionValue, options, required, type }) => (

    <FormGroup>
        <If condition={ (not(inputIsHidden(type)) || not(_.isNull(children))) }>
            <Label for={ id }>{ i18n.t(`label.${name}`) }</Label>
        </If>
        <Field component={ component } id={ id } maxLength={ maxLength } name={ name } required={ required } type={ type }>
            { ({ input, id: idInput, maxLength: inputMaxLength, meta, required: requiredInput, type: typeInput }) => (
                <Fragment>
                    <If condition={ isInput(component) } el={
                        <FormDataSelect
                            id={ idInput }
                            input={ input }
                            meta={ meta }
                            optionText={ optionText }
                            optionValue={ optionValue }
                            options={ options }
                            required={ requiredInput }
                        />
                    }>
                        <If condition={ _.isNull(children) } el={ children }>
                            <Input
                                { ...input }
                                id={ idInput }
                                invalid={ not(_.isUndefined(meta.error)) }
                                maxLength={ inputMaxLength }
                                required={ requiredInput }
                                type={ typeInput }
                            />
                        </If>
                    </If>
                    <If condition={ (not(inputIsHidden(type)) || not(_.isNull(children))) && !!meta.error }>
                        <FormFeedback className={ meta.error ? 'is-show' : 'is-hide' }>
                            { i18n.t(`form.errors.${meta.error}`) }
                        </FormFeedback>
                    </If>
                </Fragment>
            ) }
        </Field>
    </FormGroup>

)

FormData.defaultProps = {
    children: null,
    maxLength: 999999999,
    optionText: '',
    optionValue: '',
    options: [],
    required: false,
    type: ''
}

FormData.propTypes = {
    children: PropTypes.object,
    component: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    optionText: PropTypes.string,
    optionValue: PropTypes.string,
    options: PropTypes.array,
    required: PropTypes.bool,
    type: PropTypes.string
}

export default FormData
