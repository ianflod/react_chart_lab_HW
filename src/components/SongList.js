import React from "react";
import SongDetail from "./SongDetail";

const SongList = ({ songs }) => {

    const songNodes = songs.map((song, index) => {
        return <SongDetail song={song} key={index} />
    })


    return (
        <ol>
            {songNodes}
        </ol>
    )

}









export default SongList;