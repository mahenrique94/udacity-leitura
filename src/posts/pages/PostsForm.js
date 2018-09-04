import produce from 'immer'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

import i18n from 'i18n'

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

    state = produce({}, newState => ({ body: '' }))

    render() {
        const { categories, post, save } = this.props
        const { author, body, category, id, timestamp, title } = FIELDS
        return (
            <Fragment>
                <Form cancelTo="postsList" initialValue={ post } onSubmit={ save } validate={ this.validate }>
                    <FormData { ...id }/>
                    <FormData { ...timestamp }/>
                    <Row>
                        <Col xs={ 12 }>
                            <FormData { ...title }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 } xs={ 12 }>
                            <FormData { ...category } options={ categories }/>
                        </Col>
                        <Col md={ 6 } xs={ 12 }>
                            <FormData { ...author }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <SimpleMDE
                                id={ body.id }
                                label={ i18n.t(`label.${body.name}`) }
                                onChange={ this.handleBodyChange }
                                options={ {
                                    autofocus: false,
                                    spellChecker: false,
                                    status: false,
                                    tabSize: 4
                                } }
                            />
                        </Col>
                    </Row>
                </Form>
                <Button bottom float left position to={ routes.postsList }>
                    <Icon icon="chevron-left"/>
                </Button>
            </Fragment>
        )
    }

    handleBodyChange = value => this.setState(produce(newState => {
        newState.body = value
    }))

    validate = values => validateFields(values, FIELDS)

}

const mapDispatchToProps = {
    save: values => console.log(values)
}

export default connect(null, mapDispatchToProps)(PostsForm)
