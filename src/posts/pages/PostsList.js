import { topics } from 'constants/Topics'

import produce from 'immer'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { Component, Fragment } from 'react'

import { routes } from 'routes'

import { Container } from 'reactstrap'

import Button from 'components/Button'
import Icon from 'components/Icon'
import If from 'components/If'
import Loading from 'components/Loading'
import OrderBy from '../components/OrderBy'
import Post from 'components/post/Post'

class PostsList extends Component {

    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired
    }

    state = produce({}, () => ({ list: [] }))

    static getDerivedStateFromProps = ({ list }, state) => produce(state, () => ({ list: [].concat(list) }))

    componentDidMount() {
        PubSub.subscribe(topics.POSTS_ORDERED, (_, data) => {
            this.setState(
                produce(draftState => {
                    draftState.list = data
                })
            )
        })
    }

    render() {
        const { loading } = this.props
        const { list } = this.state

        return (
            <Fragment>
                <OrderBy listToOrder={ list }/>
                <If condition={ !loading } el={ Loading }>
                    <Container data-cy="posts" style={ { maxWidth: '720px' } }>
                        { list.map((post, index) => <Post data-cy={ `post-${post.title}` } key={ index } post={ post }/>) }
                    </Container>
                </If>
                <Button bottom float position right to={ routes.postsForm }>
                    <Icon icon="plus"/>
                </Button>
            </Fragment>
        )
    }

}

export default PostsList
