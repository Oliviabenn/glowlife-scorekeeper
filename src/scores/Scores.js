import { useEffect, useState } from "react";

const Scores = ({eventId, username}) =>{
    const [user, setUser]= useState({});

    useEffect(()=> {
        const username= localStorage.getItem("USERNAME");

        fetch(`http://localhost:3000/events/${username} `)
        .then(response=> {
            setUser(response.user)
        })
        .catch(err=> console.log(err))
    }, []);
    
    const [score, setScore]= useState(0)


    const increment=()=> {
        setScore(score + 1)
    }

    const decrement=()=> {
        setScore(score - 1)
    }
    

    return (
        <div className="scores">

        <div id = "app">

    {/* Name, score */}

        <div className = "scoreboard">
            <div className = "scoreboard__name">Event Id: {user.eventId}</div>
            <div className = "scoreboard__name">Player Name: {user.name}</div>
            <div className = "scoreboard__score">{user.point ? user.point : score}</div>

    {/* button, controls  */}
            <div className = "scoreboard__controls">
                    <button className =  "scoreboard__control-button" onClick={decrement}>-</button>
                    <button className =  "scoreboard__control-button" onClick={increment}>+</button>

            </div>
        </div>

        </div>
        </div>
            );



}

export default Scores;

//TODO: Redirect to score page after the user submits the homepage form.

//TODO: Page displays the event id and username.

//TODO: Display user's current score and the weather information (API).

//TODO: Make an API call to modify the score number and reload the page each time the user presses the +/- button.
