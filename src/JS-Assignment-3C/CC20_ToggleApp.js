/**
 * create a toggle component renders a button that lets the user toggle b/w 'on' and 'off' states.
 */

import React from "react";
import { Component } from "react";

class ToggleApp extends Component{
    constructor(props){
        super(props)
        this.state = {message:true}
        this.toggleButton = this.toggleButton.bind(this)
    }

    toggleButton(){
        this.setState(prevState=>({message:!prevState.message}))
        console.log(this.state.message)
    }

    render(){
        return(
            <>
                <h1>ToggleApp</h1>
                <h3>Status: {this.state.message?'Offline':'Online'}</h3>
                <button onClick={this.toggleButton}>Click here!</button>
            </>
        )
    }
}
export default ToggleApp