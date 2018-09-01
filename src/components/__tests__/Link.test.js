import React from 'react'
import renderer from 'react-test-renderer'

import Link from '../Link'

describe('Tests for Link component', () => {

    it('Should rendering without crash', () => {
        const tree = renderer.create(
            <Link>Test</Link>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
