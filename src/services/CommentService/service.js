export default class CommentService {
    constructor($http) {
        this.$http = $http;
    }

    queryComments() {
        return this.$http.get('http://localhost:3004/comments').then((resp) => {
            this.setComments(resp.data)
        });
    }

    getComments() {
        return this.comments
    }

    setComments(comments) {
        this.comments = comments
    }
}
