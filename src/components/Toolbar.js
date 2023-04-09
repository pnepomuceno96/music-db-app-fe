import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css"

function Toolbar() {
    //const [username, setText] = useState("")

    return (<div className="toolbar">
        <h1 className="center">Music Data App!</h1>
        <div className="right">
            <Link to="/addalbum"><button>Add an album</button></Link>
            
        </div>
    </div>)
}

export default Toolbar