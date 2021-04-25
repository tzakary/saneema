import React from 'react';

export default function LikeComment(props){
    const {episode} = props;
    return(
            <div className="like-comment-share">
                <div className="count">
                    <a href={`/episode/${episode.ep}`}><img src="/images/like.png" alt="Like"/></a>
                    <h3>{episode.epLikes}</h3>
                </div>
                <div className="count">
                    <a href={`/episode/${episode.ep}`}><img src="/images/comment.png" alt="Comment"/></a>
                    <h3>{episode.epComments}</h3>
                </div>
                <button><img src="/images/share.png" alt="Share"/></button>
            </div>
    )
};