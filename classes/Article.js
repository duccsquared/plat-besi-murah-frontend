export default class Article {
    constructor(title="Article title",subtitle="Article subtitle",author="Jimmy Carter",bodyList=[]) {
        this.title = title
        this.subtitle = subtitle
        this.date = new Date()
        this.author = author
        this.bodyList = bodyList
    }
}