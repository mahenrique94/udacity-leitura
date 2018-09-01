class Post {

    constructor({ author, body, category, comentCount, deleted, id, timestamp, title, voteScore }) {
        this.author = author
        this.body = body
        this.category = category
        this.comentCount = comentCount
        this.deleted = deleted
        this.id = id
        this.timestamp = timestamp
        this.title = title
        this.voteScore = voteScore
    }

}

export default Post
