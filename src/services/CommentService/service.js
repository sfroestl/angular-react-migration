export default class CommentService {
    constructor() {
        this.comments = [
            { text: 'First comment', authorId: 1 },
            { text: 'Second comment', authorId: 2 }
        ];
    }

    getComments() {
        return this.comments
    }

    setComments(comments){
        this.comments = comments
    }
}
