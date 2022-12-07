
import React from "react";
/**
 * 2.C19
 * Create a react component for creating the list of unordered elements, where you will dynamically insert student name for every object from data array.
 */
function ListMap() {
    const nameData = [
        { name: 'Sam' },
        { name: 'Sid' },
        { name: 'Alam' }
    ]

    return (
        <>
            <div className="stdName">
                <ul>Name
                </ul>
                {nameData.map((data, key) => {
                    return (<li key={key}>{data.name}</li>)
                })}
            </div>

        </>
    )
}

export default ListMap;