import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div  className="post__content">
                <img className="user_photo" src={props.result.thumbnailUrl} alt='user-img'/>
               <div className="post__header">
                   <p>Author: {props.result.name}
                   </p>
                   <p > Company: {props.result.company.name}</p>
               </div>
                <div className="post_title"><p><strong>Title:</strong> {props.result.title}</p>
                    <p className="post_body">{props.result.body}</p></div>
            </div>

        </div>
    );
};

export default PostItem;