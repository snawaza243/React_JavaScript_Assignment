import ReactDOM from 'react-dom/client'
// Assignment 3 | C 17 Simple user greeting app using functional component
// This is index.js page so define and render at the bottom
// UserGreeting App simple on the based of isLoggedIn props
function UserGreeting(props) {
    return <h1>Welcome back! Sam</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    else {
        return <GuestGreeting />
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Greeting isLoggedIn={false} />
    </>
)
