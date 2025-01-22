export default class Article {
    constructor(title="Article title",subtitle="Article subtitle",author="Jimmy Carter",bodyList=[]) {
        this.title = title
        this.subtitle = subtitle
        this.date = new Date()
        this.author = author
        this.bodyList = bodyList
    }

    copyObj() {
        let article = new Article(this.title,this.subtitle,this.author,this.bodyList.map(elem => elem))
        article.date = this.date
        return article
    }
}