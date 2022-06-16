import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList'
import SongDetail from '../components/SongDetail'
import Heading from '../components/Heading'


const SongContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div className='main'>

            <Heading heading="Top 20 Singles in the UK" />
            <SongList songs={songs} />

        </div>
    );


}

export default SongContainer;