import React from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Log.css";


const Log=()=>{
    const navigate= useNavigate();
    return(
    <>
    <div className="setting">
    <div className="bg-color">
    <div className="setting1">

    <li>
    <div className="list"><a href="#">Apps and Websites</a></div><hr></hr>
    <div className="list"><a href="#">QR Code</a></div><hr></hr>
    <div className="list"><a href="#">Notifications</a></div><hr></hr>
    <div className="list"><a href="#">Settings and privacy</a></div><hr></hr>
    <div className="list"><a href="#">Supervision</a></div><hr></hr>
    <div className="list"><Link to="/login">Log Out</Link></div><hr></hr>
    <div className="list"><Link to="/profile">Cancel</Link></div>
    </li>

    </div>

    </div>
    </div>
    <Outlet/>
    </>
    )
}

export default Log;