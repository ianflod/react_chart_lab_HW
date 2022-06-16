import React from "react";

const SongDetail = ({ song }) => {

    return (
        <div className='songs'>
            <li><b>Title:</b>{song["im:name"]["label"]} </li>
            <p><b>Artist:</b>{song["im:artist"]["label"]} </p>
        </div>
    )

}

export default SongDetail;