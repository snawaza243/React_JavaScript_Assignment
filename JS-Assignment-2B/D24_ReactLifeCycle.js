import React from "react";

class RLC extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: 'Hello sam' }
        this.changeState=this.changeState.bind(this)
    }

    componentWillUnmount() {
        console.console.log('componentWillUnmount()');
    }
    componentDidMount() {
        console.log('componentDidMount()')
    }
    changeState() {
        this.setState({ message: 'Hii sid' })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUnmount()')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()')
    }

    render() {
        return (
            <>
                <h1>{this.state.message} </h1>
                <h2>
                    <button onClick={this.changeState}>
                        Click me!
                    </button>
                </h2>
            </>
        )
    }
}
export default RLC;