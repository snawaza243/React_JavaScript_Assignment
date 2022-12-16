import React from "react"

// classfull component with ECMA6 as JXS

class MyListClassECMA extends React.Component {

    render() {
    const DataList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
        return (
            <><h1>MyListClassECMA</h1>
                <ul className="ingredient">
                    {DataList.map((value,i)=>{return<li key={i}>{value}</li>})}
                </ul>
            </>
        )
    }
}
export default MyListClassECMA