import React from "react";

// classfull component with pure react style using as XML
class MyListClassPure extends React.Component {

    render() {
        return (
            <><h1>MyListClassPure</h1>
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
}

export default MyListClassPure;