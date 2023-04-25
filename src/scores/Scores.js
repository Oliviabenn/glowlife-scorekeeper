const Scores = () =>{
    return (
        <div className="scores">

    {/* Name, score */}

        <div class = "scoreboard">
            <div class = "scoreboard__name">Player Name:</div>
            <div class = "scoreboard__score">0</div>

    {/* button, controls  */}
            <div class = "scoreboard__controls">
                    <button class =  "scoreboard__control-button">-</button>
                    <button class =  "scoreboard__control-button">+</button>

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
