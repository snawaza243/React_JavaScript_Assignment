import React from "react";

// classfull component with pure react style and ECMA6 using as XML

class MyListClassPureECMA extends React.Component {

    render() {
        const DataList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
        return (
            <><h2>MyListClassPureECMA</h2>
                {React.createElement('ul', { className: 'ingredient' },
                    DataList.map((value, i) => { return (<li key={i}>{value}</li>) })
                )}
            </>
        )
    }
}
export default MyListClassPureECMA;