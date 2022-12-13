import React from "react";
function Comment(props)
{

    return (
        <>
            <p>Comment: {props.commentText}</p>
            <p>Date: {props.commentDate} </p>
        </>
    )
}export default Comment;