import React from "react";


const DataList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

export const PureReactECMA=
    React.createElement('ul',{className:'ingredients'},
        DataList.map((value,i)=>{React.createElement('li',{},{value})})
    )



// // index.js
// import ReactDOM from 'react-dom/client'
// import {PureReactECMA} from './JSB2/BD21_ThreeDiffWay/CreateElem'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     {PureReactECMA}
//   </>
// )
