import React from 'react'
import Avatar from './Avatar';
import Comment from './Comment';
import img1 from './img1.jpg'
function CommentApp(props)
{
    return (
        <>
            <Avatar 
            avatarURL={img1} 
            alt='Avatar Pic' 
            />

            <Comment 
            commentText='comment app is working'
            commentDate='06/12/2022'
             />
        </>
    )
}export default CommentApp;