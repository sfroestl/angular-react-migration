import React from 'react';

const Comment = (props) => {
    return (
        <div>
            { props.comment.text }
        </div>
    );
};

export default Comment;
