import _ from 'lodash'
import produce from 'immer'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

import { requestSave } from '../actions'

import { routes } from 'routes'

import { validateFields } from 'utils/formValidate'

import SimpleMDE from 'react-simplemde-editor'

import { Col, Row } from 'reactstrap'

import Button from 'components/Button'
import Icon from 'components/Icon'
import Form from 'components/form/Form'
import FormData from 'components/form/FormData'

import Category from '@/categories/Category'
import Post from '../Post'

import { FIELDS } from '../fields'

class PostsForm extends Component {

    static defaultProps = {
        post: {}
    }

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.objectOf(Category)).isRequired,
        post: PropTypes.objectOf(Post),
        save: PropTypes.func.isRequired
    }

    state = produce({}, () => ({ body: '' }))

    constructor(props) {
        super(props)

        this.form = React.createRef()
    }

    render() {
        const { categories, post } = this.props
        const { body: bodyValue } = this.state
        const { author, body, category, id, timestamp, title } = FIELDS
        return (
            <Fragment>
                <Form
                    cancelTo="postsList"
                    initialValue={ post }
                    onSubmit={ this.handleSubmit }
                    ref={ this.form }
                    validate={ this.validate }
                >
                    <FormData { ...id }/>
                    <FormData { ...body }/>
                    <FormData { ...timestamp }/>
                    <Row>
                        <Col xs={ 12 }>
                            <FormData { ...title }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 } xs={ 12 }>
                            <FormData { ...category } optionText="name" optionValue="name" options={ categories }/>
                        </Col>
                        <Col md={ 6 } xs={ 12 }>
                            <FormData { ...author }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <FormData { ...body }>
                                <SimpleMDE
                                    className={ `simplemde__editor ${_.isEmpty(bodyValue) ? 'is-invalid' : ''}` }
                                    onChange={ this.handleBodyChange }
                                    options={ {
                                        autofocus: false,
                                        spellChecker: false,
                                        status: false,
                                        tabSize: 4
                                    } }
                                />
                            </FormData>
                        </Col>
                    </Row>
                </Form>
                <Button bottom float left position to={ routes.postsList }>
                    <Icon icon="chevron-left"/>
                </Button>
            </Fragment>
        )
    }

    handleBodyChange = value => {
        this.form.current.finalForm.current.form.change('body', value)
        this.setState(
            produce(draftState => {
                draftState.body = value
            })
        )
    }

    handleSubmit = values => {
        const { save } = this.props
        const { body } = this.state
        const data = { ...values, body }
        save(data)
    }

    validate = values => validateFields(values, FIELDS)

}

const mapDispatchToProps = {
    save: values => requestSave(values)
}

export default connect(null, mapDispatchToProps)(PostsForm)
