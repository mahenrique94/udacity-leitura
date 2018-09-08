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
import Filters from '../components/Filters'
import Post from '../components/post/Post'

class PostsList extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    state = produce({}, () => ({
        list: [],
        originalList: []
    }))

    componentDidMount() {
        PubSub.subscribe(topics.POSTS_ORDERED, (_, data) => {
            this.setState(
                produce(draftState => {
                    draftState.list = data
                })
            )
        })
    }

    componentWillReceiveProps({ list }) {
        this.setState(
            produce(draftState => {
                draftState.list = list
                draftState.originalList = list
            })
        )
    }

    render() {
        const { categories, loading, remove, vote } = this.props
        const { list, originalList } = this.state

        return (
            <Fragment>
                <Filters categories={ categories } listToOrder={ list } originalList={ originalList }/>
                <If condition={ !loading } el={ Loading }>
                    <Container data-cy="posts" style={ { maxWidth: '720px' } }>
                        {
                            list.map((post, index) =>
                                <Post data-cy={ `post-${post.title}` } key={ index } post={ post } remove={ remove } vote={ vote }/>)
                        }
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
