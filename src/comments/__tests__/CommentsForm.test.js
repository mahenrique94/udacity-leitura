import React from 'react'
import renderer from 'react-test-renderer'

import CommentsForm from '../pages/CommentsForm'

describe('Tests for CommentsForm page', () => {

    const REQUIRED_PROPS = {
        comment: {},
        loading: false,
        postId: 'abc123',
        save: () => console.log('Saving...')
    }

    it('Should rendering without crash', () => {
        const tree = renderer.create(
            <CommentsForm { ...REQUIRED_PROPS }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should rendering null when loading is true', () => {
        const tree = renderer.create(
            <CommentsForm { ...REQUIRED_PROPS } loading={ true }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
