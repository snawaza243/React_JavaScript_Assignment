import React, { useEffect } from "react";
import { useState } from "react";

export default function SearchFilter(props, item) {
    const [data, setData] = useState([])
    const [searchApiData, setSearchApiData] = useState([])
    const [filterVal, setFilterVal] = useState('')

    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => { res.json() })
                .then((json) => { setData(json) })
            // .catch(function(error) {console.log(error)})
        }
        fetchData();
    }, [])

    const handleFilter = (e) => {
        if (e.target.value == '') {
            setData(searchApiData);
        }
        else {
            const filterResult = searchApiData.filter(item.name.toLowerCase()
                                    .includes(e.target.value.toLowerCase()))

            setData(filterResult)

            // if (filterResult.length > 0) {
            //     setData(filterResult)
            // }
            // else {
            //     setData({ "name": "No-Data" })
            // }
        }
        setFilterVal(e.target.value)
    }

    return (
        <>
            <h1>Search Filter </h1>
            <input type="search" 
                placeholder="Search" 
                value={filterVal} 
                onInput={(e) => { handleFilter(e) }} />
            <table>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                {
                    data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}