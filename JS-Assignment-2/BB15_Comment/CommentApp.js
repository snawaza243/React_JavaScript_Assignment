import React from 'react'
import Avatar from './Avatar';
import Comment from './Comment';
import img1 from './img1.jpg'
function CommentApp(props)
{
    var 
    return (
        <>
            <Avatar 
            avatarURL={img1} 
            avatartText='Avatar Pic' 
            />

            <Comment 
            commentText='comment app by sam'
            commentDate='06/12/2022'
             />
        </>
    )
}export default CommentApp;
