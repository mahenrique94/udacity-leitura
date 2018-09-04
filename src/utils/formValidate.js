import { errors } from 'constants/FormErrors'

import _ from 'lodash'

import { not } from './functions'

const _addError = (formErrors, inputName, error) => formErrors[inputName] = error
const _inputHasValue = (values, inputName) => _.has(values, inputName)

const _inputMustHaveRequiredError = (values, name) =>
    not(_inputHasValue(values, name)) ||
    _valueIsUndefined(values, name) ||
    _valueIsEmpty(values, name)

const _valueIsUndefined = (values, inputName) => _.isUndefined(values[inputName])
const _valueIsEmpty = (values, inputName) => _.isEmpty(values[inputName])

const _validateRequiredField = (values, field, formErrors) => {
    const { name, required: isRequired } = field
    if (isRequired) {
        if (_inputMustHaveRequiredError(values, name)) {
            _addError(formErrors, name, errors.required)
        }
    }
}

const validateFields = (values, fields) => {
    const formErrors = {}
    Object.values(fields).forEach(field => {
        _validateRequiredField(values, field, formErrors)
    })
    return formErrors
}

export { validateFields }
