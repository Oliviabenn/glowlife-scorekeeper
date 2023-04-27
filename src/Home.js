import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


//TODO: Redirect to score page after the user submits the homepage form.

const Home = () =>{
    const [eventId, setEventId]= useState(0);
    const [username, setUsername]= useState("");
    const [city, setCity]= useState("");

    const navigate= useNavigate();

    const handleSubmit=(e)=> {
        e.preventDefault();

        fetch("/api/add-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                eventId: eventId,
                name: username
            })
        })

        // axios.post("/api/add-event", {eventId: eventId, name: username})
        .then(response=> response.json())
        .then(res=> {
                if(res.message === "Invalid eventId"){
                    alert("Invalid eventId")
                    return;
                }
                else{
                    localStorage.setItem("USERNAME", res.event.name);
                    localStorage.setItem("CITY", city)
                    navigate("/scores")
                }
         
        })
        .catch();
    };

//TODO: Create a form for inputting the event ID and user nickname.

    return (
        <div className="home">
            <h1>Enter your event ID #, name, and city to start playing!</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>
                    <label>Event ID #:</label>
                    <input type ="text" value = {eventId}
                    onChange = {(e)=> setEventId(e.target.value)}/>
                    </p>
                   <p>
                    <label>Player Name:</label>
                    <input type ="text" value = {username}
                    onChange = {(e)=> setUsername(e.target.value)} />
                  </p>
                  <p>
                    <label>City:</label>
                    <input type ="text" value = {city}
                    onChange = {(e)=> setCity(e.target.value)} />
                </p>
                </div>

                <button type="submit" className="submit">Submit</button>
            </form>            
        </div>

    );
}

export default Home;

