import React from 'react';
import PostItem from "./PostItem";



const PostList = ({results}) => {
    return (
        <div className="list">
            {results.map(result => <PostItem
                result={result}
                key={result.id}/>
             )}

        </div>
    );
};

export default PostList;