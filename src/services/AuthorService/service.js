const AUTHOR_URI = 'http://localhost:3004/authors'

export default class AuthorService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.authors = {};
    }

    queryAuthors() {
        return this.$http
            .get(AUTHOR_URI)
            .then((resp) => this.setAuthors(resp.data));
    }

    setAuthors(authors) {
        this.authors = authors.reduce((authorMap, author) => {
            authorMap[author.id] = author
            return authorMap;
        }, this.authors);
        return authors;
    }

    getAuthor(id) {
        return this.authors[id];
    }
}
