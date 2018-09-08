import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { not } from 'utils/functions'

import If from 'components/If'
import Loading from 'components/Loading'
import Comment from '../components/comment/Comment'

class CommentsList extends Component {

    static propTypes = {
        edit: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        remove: PropTypes.func.isRequired,
        vote: PropTypes.func.isRequired
    }

    render() {
        const { list, loading, edit, remove, vote } = this.props
        return (
            <Fragment>
                <If condition={ not(loading) } el={ Loading }>
                    {
                        list.map((comment, index) =>
                            <Comment
                                comment={ comment }
                                data-cy={ `comment-${comment.id}` }
                                edit={ edit }
                                key={ index }
                                remove={ remove }
                                vote={ vote }
                            />
                        )
                    }
                </If>
            </Fragment>
        )
    }

}

export default CommentsList
