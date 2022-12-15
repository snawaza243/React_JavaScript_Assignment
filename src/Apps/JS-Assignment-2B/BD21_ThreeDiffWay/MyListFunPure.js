import React from "react";

function MyListFunPure() {
    return (
        <><h1>MyListFunPure</h1>
            {React.createElement('ul', { className: 'ingredient' },
                React.createElement('li', {}, 'item1'),
                React.createElement('li', {}, 'item2'),
                React.createElement('li', {}, 'item3'),
                React.createElement('li', {}, 'item4'),
                React.createElement('li', {}, 'item5'),
                React.createElement('li', {}, 'item6')
            )}
        </>
    )
}
export default MyListFunPure