import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AlbumDetails.css";

function AlbumDetails() {

    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState(
        {id: 0, title: "", artistName: "", cover: "", releaseDate: "", tracklist: []}
        );
    
    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        //Make HTTP request for album data
        fetch(`http://localhost:3030/albums?id=${id}`, requestOptions)
        .then((response) =>  {return response.json()})
        .then((result) => {
            setAlbum(prevState =>
                {  
                return { ...prevState,
                    id: result[0].id, 
                    title: result[0].title, 
                    artistName: result[0].artistName,
                    cover: result[0].cover,
                    releaseDate: result[0].releaseDate,
                    tracklist: result[0].tracklist
                }}
                ); 
            })
        .catch((err) => console.log("error", err))
        .finally(() => {
            // Album data is ready to be rendered
            setLoading(false);
        })   
    }

    useEffect(() => {getData()}, [])

    // Wait for data to load
    if (loading) {return(<><p>Loading...</p></>)};
    
    return (<div>
            <h2>{album.title}</h2>
            <h3>by {album.artistName}</h3>
            <img className="detailcover" src={album.cover} alt={album.title} cover/>
            <p>Released: {album.releaseDate}</p>
            <p>Tracklist:</p>
            <ul>
                {album.tracklist.map((track) => 
                <p>{album.tracklist.indexOf(track) + 1}. {track}</p>)}
            </ul>
        </div>);
    
}

export default AlbumDetails;