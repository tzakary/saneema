import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Episode from '../Components/Episode';

export default function SaneemaHomeScreen(){
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('/api/episodes');
            setEpisodes(data);
        }
        fetchData();
    }, []);
    return(
        <div className="main-layout">
            {episodes.map((episode) => (
                <Episode key={episode.ep} episode={episode}></Episode>
            ))}
        </div>
    );
};