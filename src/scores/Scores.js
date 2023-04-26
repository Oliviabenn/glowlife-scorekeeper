import { useEffect, useState } from "react";
import Weather from "../weather/Weather";

const Scores = () =>{
    const [user, setUser]= useState({});

 useEffect(()=> {
        const username= localStorage.getItem("USERNAME");
      
        if(username){
        fetch(`http://localhost:3000/events/${username} `)
        .then(res=> res.json())
        .then(response=> {
            setUser(response.user)
            setScore(response.user.point)
        })
        .catch(err=> console.log(err))
    }
    }, []);

    
    let [score, setScore]= useState(0)


    const increment=()=> {
        setScore(score + 1);
        handleUpdate("incr");

    }

    const decrement=()=> {
        setScore(score - 1)

      handleUpdate("decr");
    }

    const handleUpdate=(type)=> {
        if(type === "incr"){
            score += 1
        }
        else if(type === "decr"){
            score -= 1
        }

        fetch("http://localhost:3000/score", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                point:  score
            })
        })
        .then(res=> {})
        .catch(err=> console.log(err))
    }
    

    return (
        <div className="scores">

        <div id = "app">

    {/* Name, score */}

        <div className = "scoreboard">
            <div className = "scoreboard__name">Event Id: {user.eventId}</div>
            <div className = "scoreboard__name">Player Name: {user.name}</div>
            <div className = "scoreboard__score">{ score }</div>

    {/* button, controls  */}
            <div className = "scoreboard__controls">
                    <button className =  "scoreboard__control-button" onClick={decrement}>-</button>
                    <button className =  "scoreboard__control-button" onClick={increment}>+</button>

            </div>
        </div>

        </div>

        <Weather />
        </div>
            );



}

export default Scores;

//TODO: Redirect to score page after the user submits the homepage form.

//TODO: Page displays the event id and username.

//TODO: Display user's current score and the weather information (API).

//TODO: Make an API call to modify the score number and reload the page each time the user presses the +/- button.
