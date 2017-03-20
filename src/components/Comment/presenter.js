import React from 'react';
import { getAngularService } from '../../services/AngularService';

const Comment = ({ comment }) => {
    const { text, authorId } = comment
    const AuthorService = getAngularService('AuthorService');
    const author = AuthorService.getAuthor(authorId);
    return (
        <div>
            { text } | Author: { author.name }
        </div>
    );
};

export default Comment;
