import React from "react";
import { Link } from "react-router-dom";
import "./Album.css";

function Album(props) {
    // Returns card that displays album metadata(Title, Artist, Release Year, Cover Art)
    console.log(props);
    return (<>
        <div className="card">
            <Link to={{
                pathname: `/albums/${props.id}`,
            }} 
                params={{title: props.title, artistName: props.artistName, cover: props.cover, releaseDate: props.releaseDate, tracklist: props.tracklist}}>
                    <h3>{props.title}</h3></Link>
            <h3>by {props.artistName}</h3>
            <h5>{props.releaseDate.substr(0,4)}</h5>
            <img className="cover" src={props.cover} alt="album cover"/>
        </div>
    </>)
}

export default Album;