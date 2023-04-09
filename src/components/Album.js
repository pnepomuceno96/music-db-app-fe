import React from "react";
import "./Album.css"

function Album(props) {
    // Returns card that displays album metadata(Title, Artist, Release Year, Cover Art)
    return (<>
        <div className="card">
            <h3>{props.title}</h3>
            <h3>by {props.artistName}</h3>
            <h5>{props.releaseDate.substr(0,4)}</h5>
            <img className="cover" src={props.cover} alt="album cover"/>
        </div>
    </>)
}

export default Album;