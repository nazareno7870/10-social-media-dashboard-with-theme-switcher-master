import { useState } from "react"
import Followers from "./Followers"
import StatCard from "./StatCard"

export default function Dashboard (){
    const [darkMode, setdarkMode] = useState(false)

    const theme = darkMode ? 'dark-mode' : 'light-mode'

    return(
    <div className={'dashboard '+theme}>

        <div className={"top "+theme}>
            <h1>Social Media Dashboard</h1>
            <h4>Total Followers: 23.004</h4>
        </div>

        <div className={"bottom "+theme}>

            <div className={"theme "+theme}>
                <h4>Dark Mode</h4>
                <label className={"switch "+theme}>
                <input type="checkbox" onClick={()=>setdarkMode(!darkMode)}></input>
                <span className={"slider round "+theme}></span>
                </label>
            </div>

            <div className={"followers "+theme}>

                <Followers
                Theme={theme}
                SocialN={'facebook'}
                User={'@nathanf'}
                Followers={1987}
                NewFollowers={12}
                />

                <Followers
                Theme={theme}
                SocialN={'twitter'}
                User={'@nathanf'}
                Followers={1044}
                NewFollowers={99}
                />

                <Followers
                Theme={theme}
                SocialN={'instagram'}
                User={'@realnathanf'}
                Followers={'11k'}
                NewFollowers={1099}
                />

                <Followers
                Theme={theme}
                SocialN={'youtube'}
                User={'Nathan F.'}
                Followers={8239}
                NewFollowers={-144}
                />

            </div>

            <div className={"overview "+theme}>

                <div className={"title-overview "+theme}>
                    <h2>Overview - Today</h2>
                </div>

                <StatCard
                Theme={theme}
                stat={'Page Views'}
                statData={87}
                SocialN={'facebook'}
                percent={3} 
                />

                <StatCard
                Theme={theme}
                stat={'Likes'}
                statData={52}
                SocialN={'facebook'}
                percent={-2} 
                />

                <StatCard
                Theme={theme}
                stat={'Likes'}
                statData={5462}
                SocialN={'instagram'}
                percent={2257} 
                />

                <StatCard
                Theme={theme}
                stat={'Profile Views'}
                statData={'52k'}
                SocialN={'instagram'}
                percent={1375} 
                />

                <StatCard
                Theme={theme}
                stat={'Retweets'}
                statData={117}
                SocialN={'twitter'}
                percent={303} 
                />

                <StatCard
                Theme={theme}
                stat={'Likes'}
                statData={507}
                SocialN={'twitter'}
                percent={553} 
                />

                <StatCard
                Theme={theme}
                stat={'Likes'}
                statData={107}
                SocialN={'youtube'}
                percent={-19} 
                />

                <StatCard
                Theme={theme}
                stat={'Total Views'}
                statData={1407}
                SocialN={'youtube'}
                percent={-12} 
                />

            </div>

            <div className={"attribution "+theme}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/nazareno7870">Nazareno del Río</a>
            </div>

        </div>
    </div>
    )
}