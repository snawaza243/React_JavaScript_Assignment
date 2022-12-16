import React from "react";

function MyListFunPureECMA(){
    
    const DataList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

    return(
            <><h2>MyListFunPureECMA</h2>
                {React.createElement('ul', { className: 'ingredient' },
                    DataList.map((value, i) => { return (<li key={i}>{value}</li>) })
                )}
            </>

    )
}
export default MyListFunPureECMA