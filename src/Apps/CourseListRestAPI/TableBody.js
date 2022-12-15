import React, { Component } from 'react';
import { Link } from "react-router-dom";
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.course_code}</td>
                <td>{this.props.obj.course_name}</td>
                <td>{this.props.obj.description}</td>
                <td><button type="submit"> <Link to="post_form">Enquire</Link></button></td>
            </tr>
        );
    }
}
export default DataTable;