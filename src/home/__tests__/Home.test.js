import React from 'react'
import renderer from 'react-test-renderer'

import configureStore from 'redux-mock-store'

import Home from '../pages/Home'

import { Record } from 'immutable'

describe('Tests for Home component', () => {

    const initialState = new Record({})()
    const mockStore = configureStore([])
    const store = mockStore(initialState)

    it('Should rendering without crash', () => {
        const tree = renderer.create(
            <Home store={ store }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})
