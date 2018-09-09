import React from 'react'
import renderer from 'react-test-renderer'

import CommentsList from '../pages/CommentsList'

import CommentModel from '../Comment'

describe('Tests for CommentsList page', () => {

    const REQUIRED_PROPS = {
        edit: () => console.log('Editing...'),
        list: [
            new CommentModel({
                author: 'Test',
                body: 'Testing...',
                deleted: false,
                id: 'abc123',
                parentDeleted: false,
                parentId: '123abc',
                timestamp: 123123123123,
                voteScore: 1
            })
        ],
        loading: false,
        remove: () => console.log('Removing...'),
        vote: () => console.log('Voting...')
    }

    it('Should rendering without crash', () => {
        const tree = renderer.create(
            <CommentsList { ...REQUIRED_PROPS }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should rendering a loading component when loading is true', () => {
        const tree = renderer.create(
            <CommentsList { ...REQUIRED_PROPS } loading={ true }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should rendering a empty list when list is empty', () => {
        const tree = renderer.create(
            <CommentsList { ...REQUIRED_PROPS } list={ [] }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
