import { useState } from "react"
import Followers from "./Followers"

export default function Dashboard (){
    const [darkMode, setdarkMode] = useState(false)
return(
    <>  
        <div className="top">
            <h1>Social Media Dashboard</h1>
            <h4>Total Followers: 23.004</h4>
        </div>
        <div className="bottom">
            <div className="theme">
                <h4>Dark Mode</h4>
                <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
                </label>
            </div>
            <div className="followers">
                <Followers
                SocialN={'facebook'}
                User={'@nathanf'}
                Followers={1987}
                NewFollowers={12}
                />
                <Followers
                SocialN={'twitter'}
                User={'@nathanf'}
                Followers={1044}
                NewFollowers={99}
                />
                <Followers
                SocialN={'instagram'}
                User={'@realnathanf'}
                Followers={'11k'}
                NewFollowers={1099}
                />
                <Followers
                SocialN={'youtube'}
                User={'Nathan F.'}
                Followers={8239}
                NewFollowers={-144}
                />
            </div>
            <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>
            </div>
        </div>
    </>
    )
}