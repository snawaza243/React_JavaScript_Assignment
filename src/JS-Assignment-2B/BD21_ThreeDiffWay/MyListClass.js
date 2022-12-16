import React from "react"

// classfull component L

class MyListClass extends React.Component {

    render() {
        return (
            <><h1>MyListClass</h1>
                <ul className="ingredient">
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                    <li>item6</li>
                </ul>
            </>
        )
    }
}
export default MyListClass