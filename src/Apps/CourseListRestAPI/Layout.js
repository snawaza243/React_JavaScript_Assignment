// import React from 'react';
import { Outlet, Link } from "react-router-dom";

import React from 'react'

function Layout() {
    return (
        <>
            <h1>Build a course list application with basic React concepts and Rest API</h1>
            <ul>
                <li><Link to="course_list">Click to view Courses</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout
