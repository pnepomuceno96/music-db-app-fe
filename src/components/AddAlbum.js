import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./AddAlbum.css"


function AddAlbum() {
    const [title, setTitle] = useState("")
    const [artistName, setArtistName] = useState("")
    const [date, setDate] = useState("")
    const [cover, setCover] = useState("")
    const [open, setOpen] =  useState(false)
    
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAlbum = {title: title, artistName: artistName, releaseDate: date, cover: cover}

        fetch('http://localhost:3030/albums', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(newAlbum)
        })
        console.log(newAlbum)
        handleOpen()
    }
    
    return (
    <div>
        <div className="toolbar">
        <h1 className="center">New Album</h1>
        </div>
        <form onSubmit={handleSubmit} id="formStyle">
        <label>Album Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>Artist Name:
            <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)}/>
        </label>
        <label>Release Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label>Cover URL:
            <input type="url" value={cover} onChange={(e) => setCover(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">Submit</button>
        </form>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Album added</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Link to="/"><Button>Return Home</Button></Link>
            </DialogActions>
        </Dialog>
    </div>)
}

export default AddAlbum;