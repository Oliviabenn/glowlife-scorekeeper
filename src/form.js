import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: ''
        }
    }

    handleNameEntry = (event) => {
        this.setState({
            username: event.target.value

        }
     )
    }

    handleEventID = (event) => {
        this.setState({
            username: event.target.value
        }
     )
    }

    handleSubmit = event => {
        alert('${this.state.username} ${this.state.eventid}')
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
                    onChange = {this.handleNameEntry} />
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form