import React from 'react';
import ReactPlayer from 'react-player';
import data from '../data';

export default function SaneemaEpisodeScreen(props){
    const episodeInfo = data.episodes.find ((x) => x.ep === props.match.params.id);
    return(
        <div className="episode-main-layout">
            <div className="video-container">
                <ReactPlayer controls url='/videos/saneemaE07MalcolmAndMarie.mp4)'></ReactPlayer>
            </div>
            <div className="more-episodes-container">
                <h2>more episodes.</h2>
                <div className="more-episode-panel">
                    {data.episodes.map((episode) => episode.ep !== episodeInfo.ep ? (
                        <div key={episode.ep} className="more-episode-card">
                            <a href={`/episode/${episode.ep}`}><img className="thumbnail" src={episode.epThumbnail} alt={`सनीमा ${episode.epName}`}/></a>
                            <a href="/"><h1>सनीमा</h1></a>
                            <a href={`/episode/${episode.ep}`}><h2>{episode.epName}</h2></a>
                        </div>
                    ) : null)}
                </div>
            </div>
            <div className="video-description">
                <a href="/"><h1>सनीमा</h1></a>
                <a href={`/episode/${episodeInfo.ep}`}><h2>{episodeInfo.epName}</h2></a>
                <p>{episodeInfo.epDescription}</p>
                <div className="like-comment-share">
                    <div className="count">
                        <button><img src="/images/like.png" alt="Like"/></button>
                        <h3>{episodeInfo.epLikes}</h3>
                    </div>
                    <div className="count">
                        <button><img src="/images/comment.png" alt="Comment"/></button>
                        <h3>{episodeInfo.epComments}</h3>
                    </div>
                    <button><img src="/images/share.png" alt="Share"/></button>
                </div>
            </div>
            <div className="comments-section">
                Comments - section
            </div>
        </div>
    );
};