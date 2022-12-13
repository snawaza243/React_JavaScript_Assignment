import React from "react";

// using pure react style
export const PureReact=
    React.createElement('ul',{className:'ingredients'},
        React.createElement('li',{},'item1'),
        React.createElement('li',{},'item2'),
        React.createElement('li',{},'item3'),
        React.createElement('li',{},'item4'),
        React.createElement('li',{},'item5')
    )



// // index.js
// import ReactDOM from 'react-dom/client'
// import {PureReact} from './JSB2/BD21_ThreeDiffWay/CreateElem'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     {PureReact}
//   </>
// )
