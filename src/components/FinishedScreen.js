function FinishedScreen({dispatch, points, maxPossiblePoints, highscore}) {
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if(percentage >= 80)
        emoji = '🥇🥇🥇'
    if(percentage >=60 && percentage < 80)
        emoji = '🥈🥈'
    if(percentage >=40 && percentage < 60)
        emoji = '🥉'
    if(percentage < 40)
        emoji = '😢'

    return (
        <>
            <p className="result">
                You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%) {emoji}
             </p>

            <p className="highscore">(Highscore: {highscore} points)</p>

            <button className="btn btn-ui" onClick={()=>dispatch({type: 'restart'})}>Restart Quiz</button>
        </>
    )
}

export default FinishedScreen
