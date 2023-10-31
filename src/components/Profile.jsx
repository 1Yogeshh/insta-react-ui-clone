import React from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Profile.css";
import instalogo from "./insta-logo.png"
import reels from "./video.png"
import search from "./search.png"
import msg from "./send.png"
import home from "./home.png"
import explore from "./compass.png"
import create from "./add.png"
import heart from "./heart.png"
import profile from "./new-moon.png"
import more from "./sort.png"
import threads from "./threads.png"
import hero from "./hero.png"
import dot from "./dots.png"
import like from "./heart (1).png"
import comment from "./bubble-chat.png"
import share from "./send (1).png"
import save from "./bookmark.png"
import hero2 from "./hero2.png"
import hero3 from "./hero3.png"
import hero4 from "./hero4.png"
import plus from "./plus.png"
import feed from "./feed.png"
import tag from "./tagged.jpg"
import setting from "./settings.png"

const Profile=()=>{
    const navigate= useNavigate();
    return(
    <>
    <div className="home">
            <div className="navbar">
            <div className="logo">
                <img src={instalogo} alt="apd"></img>
                </div>

                <div className="buttons">

                    <button className="buttons1" onClick={()=>navigate("/home")}>
                    <img src={home} alt="apd"></img>
                    <span>Home</span>
                    </button>

                    <button className="buttons1">
                    <img src={search} alt="apd"></img>
                    <span>Search</span>
                    </button>

                    <button className="buttons100">
                    <img src={explore} alt="apd"></img>
                    <span>Explore</span>
                    </button>

                    <button className="buttons1">
                    <img src={reels} alt="apd"></img>
                    <span>Reels</span>
                    </button>

                    <button className="buttons1">
                    <img src={msg} alt="apd"></img>
                    <span>Messages</span>
                    </button>

                    <button className="buttons1">
                    <img src={heart} alt="apd"></img>
                    <span>Notifications</span>
                    </button>

                    <button className="buttons1">
                    <img src={create} alt="apd"></img>
                    <span>Create</span>
                    </button>

                    <button className="buttons11">
                    <img src={hero4} alt="apd"></img>
                    <span>Profile</span>
                    </button>

                </div>
                <div className="navbar-footer">

                <button className="buttons2">
                    <img src={threads} alt="apd"></img>
                    <span>Threads</span>
                    </button>

                    <button className="buttons2">
                    <img src={more} alt="apd"></img>
                    <span>More</span>
                    </button>

                </div>
            </div>

            <hr></hr>
            <div className="pf">
                <div className="pf1">
                <div className="dp-image">
                <img src={hero4}></img>
                </div>

                <div className="dp-name">
                <div className="dp-username">
                <div className="dd1">
                    <p>dahiya_saab_01</p>
                    <button>Edit Profile</button>
                    </div>
                    <div className="btn01">
                    
                    <button>View Archieve</button>
                    <button onClick={()=>navigate("/setting")}>Setting</button>
                    </div>
                </div>
                <div className="dp-follow">
                <a href="#"><p>11  posts</p></a>
                <a href="#"><p>789  followers</p></a>
                <a href="#"><p>190  following</p></a>

                </div>
                <div className="dp-n">
                <p>YOGESH</p>
                </div>

                <div className="dp-n">
                <p>Army</p>
                </div>
                </div>
                 </div>

                <div className="dp-story">
                <div className="dp-story1">
                <img src={hero4}></img>
                <p>Highlight</p>
                </div>

                <div className="dp-story2">
                <img src={hero4}></img>
                <p>Highlight</p>
                </div>
                <div className="dp-story2">
                <img src={plus}></img>
                <p>New</p>
                </div>
                </div>
                
                <hr></hr>

                <div className="pf2">
                    <div className="pf4">
                    <button className="pf41">
                    <img src={feed} alt="apd"></img>
                    <span>POST</span>
                    </button>

                    <button className="pf42">
                    <img src={reels} alt="apd"></img>
                    <span>REELS</span>
                    </button>

                    <button className="pf43">
                    <img src={save} alt="apd"></img>
                    <span>SAVED</span>
                    </button>

                    <button className="pf44">
                    <img src={tag} alt="apd"></img>
                    <span>TAGGED</span>
                    </button>
                    </div>

                    <div className="pf3">
                    <div className="pf31">
                        <img src={hero4}></img>
                    </div>
                    <div className="pf31">
                    <img src={hero3}></img>
                    </div>
                    <div className="pf31">
                    <img src={hero2}></img>
                    </div>
                    

                    </div>
                </div>
            </div>

            </div>




    <Outlet/>
    </>
    )
}

export default Profile;