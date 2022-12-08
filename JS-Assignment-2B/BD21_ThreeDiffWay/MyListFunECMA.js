import React from "react";

function MyListFunECMA(){
    const DataList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

    return(
        <>
            <ul className="ingredient">
                {DataList.map((value,i)=>{return <li key={i}>{value}</li>})}
            </ul>
        </>
    )
}

export default MyListFunECMA;