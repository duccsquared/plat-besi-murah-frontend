export default class Article {
    constructor(title="Article title",author="Jimmy Carter",bodyList=[]) {
        this.title = title
        this.subtitle = null
        this.date = new Date()
        this.author = author
        this.bodyList = bodyList
    }
}