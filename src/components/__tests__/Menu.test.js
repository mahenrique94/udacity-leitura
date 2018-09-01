import React from 'react'
import renderer from 'react-test-renderer'

import Menu from '../menu/Menu'

describe('Tests for Menu component', () => {

    it('Should rendering without crash', () => {
        const tree = renderer.create(
            <Menu/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
