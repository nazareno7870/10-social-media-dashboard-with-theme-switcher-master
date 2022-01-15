
export default function Followers ({SocialN, User, Followers, NewFollowers,Theme}){

    const srcLogo = `./images/icon-${SocialN}.svg`
    const iconUpDown = NewFollowers>=0 ? 'up' : 'down'
    const FollowersToday = NewFollowers>=0 ? NewFollowers : (NewFollowers*-1)

    return(
        <div className={`card-followers ${SocialN} ${Theme}`}>
            <div className={"user "+Theme}>
                <img src={srcLogo} alt="Icon RS"></img>
                <h3>{User}</h3>
            </div>
            <h1>{Followers}</h1>
            <h2>FOLLOWERS</h2>
            <div className={`new-followers ${iconUpDown} ${Theme}`}>
                <img src={`./images/icon-${iconUpDown}.svg`} alt="Up/Down Icon"></img>
                <h4>{FollowersToday} Today</h4>
            </div>
        </div>
    )
}