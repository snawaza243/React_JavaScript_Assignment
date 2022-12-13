/**
*Note : Currently not working
*/
import React from "react";
import axios from 'axios'
import { Component } from "react";

export default class JAMap extends Component{
    constructor (props){
        super(props)
        this.state = {userName:''}
    }

    getData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Request=>{console.log(Request,data)})
        var data = Request.data;
        var loopData = '';
        var i;
        for(i=0; i<data.length;i++){
            loopData(`<li> ${data[i].name} </li>`)
        }
        this.setState({userName:loopData})

    }
    componentDidMount(){
        this.getData();
    }
    render(){
        const[userName] = this.state
        console.log()
        return(
            <>
                <div>
                    <ul dangerouslySetInnerHTML={{userName}}>

                    </ul>
                </div>
            </>
        )
    }
}
