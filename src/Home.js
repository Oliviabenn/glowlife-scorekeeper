import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const [eventId, setEventId]= useState(0);
    const [username, setUsername]= useState("");

    const navigate= useNavigate();

    const handleSubmit=(e)=> {
        e.preventDefault();

        console.log(eventId, username)

        fetch("http://localhost:3000/add-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                eventId: eventId,
                name: username
            })
        })
        .then(response=> response.json())
        .then(res=> {
            if(res.message === "Event name already exists"){
                alert("Username already chosen, please choose another username to proceed")
                return;
            }
            else if(res.message === "Event created successfully"){
               localStorage.setItem("USERNAME", username);
               navigate("/scores")
            }
        })
        .catch();
    }


    return (
        <div className="home">
            <h1>Enter your name and event ID # to start playing!</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event ID #:</label>
                    <input type ="text" value = {eventId}
                    onChange = {(e)=> setEventId(e.target.value)}/>

                    <label>Player Name:</label>
                    <input type ="text" value = {username}
                    onChange = {(e)=> setUsername(e.target.value)} />
                </div>

                <button type="submit">Submit</button>
            </form>            
        </div>

    );
}

export default Home;

//TODO: Create a form for inputting the event ID and user nickname.

// Redirect to a score page after the user submits the homepage form.

