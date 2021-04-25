import React from 'react';
import LikeComment from './LikeComment';

export default function Episode(props){
    const {episode} = props;
    return(
        <div key={episode.ep} className="film-card">
            <a href={`/episode/${episode.ep}`}><img className="thumbnail" src={episode.epThumbnail} alt={`सनीमा ${episode.epName}`}/></a>
            <a href="/"><h1>सनीमा</h1></a>
            <a href={`/episode/${episode.ep}`}><h2>{episode.epName}</h2></a>
            <p>{episode.epDescription}</p>
            <LikeComment key={episode.ep} episode={episode}></LikeComment>
        </div>
    )
};