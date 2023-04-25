import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: ''
        }
    }

//TODO: Redirect to a score page after the user submits the homepage form

    Checking(event) {
        event.preventDefault();
        if (this.state.username === "" || this.state.eventid === "") {
          alert("Fields are required");
          return;
        }
        if (this.state.username == "somename" && this.state.eventid === "1234") {
          this.props.history.push('./scores.js')
          return;
        }else{
          alert("Login Failed ! . Check Username and Password.")
        }
         
        console.log(`${this.state.username}`)
    }


    handleName = (event) => {
        this.setState({
            username: event.target.value

        }
     )
    }

    handleEventID = (event) => {
        this.setState({
            eventid: event.target.value
        }
     )
    }

    handleSubmit = event => {
        alert('Thank you for your submission. You will be redirected to the main page.')
        // alert('${this.state.username} ${this.state.eventid}')
    }


render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Event ID #:</label>
                    <input type ="text" value = {this.state.eventid}
                    onChange = {this.handleEventID}/>

                    <label>Player Name:</label>
                    <input type ="text" value = {this.state.username}
                    onChange = {this.handleName} />
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;

//TODO: Store in database