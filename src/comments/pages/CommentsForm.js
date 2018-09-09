import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { not } from 'utils/functions'
import { validateFields } from 'utils/formValidate'

import { Col, Row } from 'reactstrap'

import Form from 'components/form/Form'
import FormData from 'components/form/FormData'
import If from 'components/If'

import { FIELDS } from '../fields'

import Comment from '../Comment'

class CommentsForm extends Component {

    static propTypes = {
        comment: PropTypes.objectOf(Comment).isRequired,
        loading: PropTypes.bool.isRequired,
        postId: PropTypes.string.isRequired,
        save: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.form = React.createRef()
    }

    render() {
        const { comment, loading } = this.props
        const { author, body, id, timestamp } = FIELDS
        return (
            <If condition={ not(loading) } el={ null }>
                <Form
                    className="mt-5"
                    initialValues={ comment }
                    onSubmit={ this.handleSubmit }
                    ref={ this.form }
                    validate={ this.validate }
                >
                    <FormData { ...id }/>
                    <FormData { ...timestamp }/>
                    <Row>
                        <Col xs={ 12 }>
                            <FormData { ...author }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <FormData { ...body }/>
                        </Col>
                    </Row>
                </Form>
            </If>
        )
    }

    handleSubmit = values => {
        const { postId, save } = this.props
        values.parentId = postId
        save(values)
        this.form.current.finalForm.current.form.reset()
    }

    validate = values => validateFields(values, FIELDS)

}

export default CommentsForm
