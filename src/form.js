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

    render(){
        return(
            <form>
                <div>
                    <label>Event ID #:</label>
                    <input type ="text"/>

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