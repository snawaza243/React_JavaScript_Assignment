import React from "react";
import {Link, Outlet} from 'react-router-dom'

export default function Layout()
{
    return(
        <>
            <nav>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='./login' > Login</Link> </li>
                <li> <Link to='./signup' >Signup</Link></li>
            </nav>
            <Outlet/>
        </>
    )
}