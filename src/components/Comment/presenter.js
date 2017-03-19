import React from 'react';
import { getAngularService } from '../../services/AngularService';

const Comment = ({ comment }) => {
    const { text, authorId } = comment
    const AuthorService = getAngularService('AuthorService');
    return (
        <div>
            { text } | Author: { AuthorService.getAuthor(authorId) }
        </div>
    );
};

export default Comment;
