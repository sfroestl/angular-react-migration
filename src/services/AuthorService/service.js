export default class AuthorService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.authors = {};
    }

    queryAuthors() {
        return this.$http.get('http://localhost:3004/authors').then((resp) => {
            this.setAuthors(resp.data)
        });
    }

    setAuthors(authors) {
        authors.reduce((authorMap, author) => {
            authorMap[author.id] = author
            return authorMap;
        }, this.authors);
    }

    getAuthor(id) {
        return this.authors[id];
    }
}
