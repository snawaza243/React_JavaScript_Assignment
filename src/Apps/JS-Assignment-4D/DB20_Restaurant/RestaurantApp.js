import React from "react";
import { useState } from "react";
import restData from './db.json'
// import img1 from './1.png'

export default function RestaurantApp() {
    const [Users, fetchUsers] = useState([])

    // useEffect(() => {
    //     fetch('https://localhost:3000/RestauranApp')
    //     .then((res) => res.json())
    //     .then((res) => {
    //         fetchUsers(res)
    //         console.log(res)
    //     })
    // }, [])

    return (
        <>
            <div className="mainDiv">
                <h1>Restaurant App</h1>
                <p>This is a Restaurant app demo</p>
                <table>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th>Image</th><th>Desc</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restData.map((item, i) => {
                            return (
                                <tr>
                                    <td> {item.id} </td>
                                    <td><img src={item.img} alt={ item.id} /></td>
                                    <td>{item.desc}</td>
                                    <td>{item.comment}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )


}