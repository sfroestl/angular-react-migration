import React, { PropTypes } from 'react';

const Comment = ({ comment, author }) => (
    <div>
        { comment.text } | Author: { author.name }
    </div>
);


Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
    }).isRequired,
    author: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
};

export default Comment;
