import React from 'react'
import renderer from 'react-test-renderer'

import Comment from '../comment/Comment'

import CommentModel from '../../Comment'

describe('Tests for Comment component', () => {

    const REQUIRED_PROPS = {
        comment: new CommentModel({
            author: 'Test',
            body: 'Testing...',
            deleted: false,
            id: 'abc123',
            parentDeleted: false,
            parentId: '123abc',
            timestamp: 123123123123,
            voteScore: 1
        }),
        edit: () => console.log('Editing...'),
        remove: () => console.log('Removing...'),
        vote: () => console.log('Voting...')
    }

    it("Should rendering without crash", () => {
        const tree = renderer.create(
            <Comment { ...REQUIRED_PROPS }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
