export default class AuthorService {
    constructor() {
        this.authors = {
            '1': 'John Doe',
            '2': 'Eddart Stark'
        };
    }

    getAuthor(id) {
        return this.authors[id];
    }
}
