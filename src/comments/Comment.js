import moment from 'moment'

import { getFormatDate } from 'utils/date'

class Comment {

    constructor({ author, body, deleted, id, parentDeleted, parentId, timestamp, voteScore }) {
        this.author = author
        this.body = body
        this.deleted = deleted
        this.id = id
        this.parentDeleted = parentDeleted
        this.parentId = parentId
        this.timestamp = timestamp
        this.voteScore = voteScore
    }

    get date() {
        return moment(this.timestamp).format(getFormatDate(true))
    }

}

export default Comment
