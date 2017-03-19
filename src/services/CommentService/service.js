export default class CommentService {
    constructor() {
        this.comments = [
            { text: 'First comment' },
            { text: 'Second comment' }
        ];
    }

    getComments() {
        return this.comments
    }

    setComments(comments){
        this.comments = comments
    }
}
