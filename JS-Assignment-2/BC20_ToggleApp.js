/**
 * 2.C20
 * Create toggle component render a button that its the user toggle b/w 'on' and 'off' states.
 */

import React from "react";

class ToggleApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: true }
        this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle() {
        this.setState(prevState => (
            { message: !prevState.message }
        ))
    }


    render() {
        return (
            <>
                <h1>Toggle App</h1>
                <h3>States: {this.state.message ? 'Online' : 'Offline'}</h3>
                <button onClick={this.clickHandle}>Click here!</button>
            </>
        )
    }
}
export default ToggleApp;