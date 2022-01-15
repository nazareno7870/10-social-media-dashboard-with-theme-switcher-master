
export default function StatCard ({stat,statData,SocialN,percent,Theme}){

    const iconUpDown = percent>=0 ? 'up' : 'down'
    const PercentToday = percent>=0 ? percent : (percent*-1)

    return(
        <div className={"statcard "+Theme}>
            <div className={"top-card "+Theme}>
                <h3>{stat}</h3>
                <img src={`./images/icon-${SocialN}.svg`} alt="Network Icon"></img>
            </div>
            <div className={"bottom-card "+Theme}>
                <h2>{statData}</h2>

                <div className={`new-followers ${iconUpDown} ${Theme}`}>
                    <img src={`./images/icon-${iconUpDown}.svg`} alt="Up/Down Icon"></img>
                    <h4>{PercentToday}%</h4>
                </div>
            </div>         
        </div>

    )
}