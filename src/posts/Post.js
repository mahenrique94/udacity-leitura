import moment from 'moment'

import { getFormatDate } from 'utils/date'

class Post {

    constructor({ author, body, category, commentCount, deleted, id, timestamp, title, voteScore }) {
        this.author = author
        this.body = body
        this.category = category
        this.commentCount = commentCount
        this.deleted = deleted
        this.id = id
        this.timestamp = timestamp
        this.title = title
        this.voteScore = voteScore
    }

    get date() {
        return moment(this.timestamp).format(getFormatDate(true))
    }

    get resume() {
        const FROM = 0
        const TO = 255
        return this.body.substring(FROM, TO)
    }

}

export default Post
