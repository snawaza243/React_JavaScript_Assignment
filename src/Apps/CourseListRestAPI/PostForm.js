import React, { Component } from 'react';
import axios from 'axios';
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = { course_duration: '', course_credit: '', course_fee: '' }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/courses_enquire', this.state)
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
    }
    
    changeHandle = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }
    render() {
        const { userid, title, body } = this.state;
        return (
            <div><h1>Course Enquire</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Course Duration</label>
                        <input type="text" value={this.course_duration}
                            name="course_duration" onChange={this.changeHandle}></input>
                    </div>
                    <div>
                        <label>Course Credit</label>
                        <input type="text" value={this.course_credit}
                            name="course_credit" onChange={this.changeHandle}/>
                    </div>
                    <div>
                        <label>Course Fee</label>
                        <input type="text" value={this.course_fee} name="course_fee"
                            onChange={this.changeHandle}></input>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm;