import {React, useState, useEffect} from "react"
import Toolbar from "./Toolbar";
import Album from "./Album";

function Home() {
    const [albums, setAlbums] = useState([])
  
    const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://localhost:3030/albums", requestOptions)
      .then((response) => response.json())
      .then((result) => setAlbums(result))
      .catch((err) => console.log("error", err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Toolbar />
            <ul>

                {albums.map((album) => 
                <Album key={album.id} title={album.title} artistName={album.artistName} releaseDate={album.releaseDate} cover={album.cover}/>)}
            </ul>
        </div>
    )
}

export default Home;