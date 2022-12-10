/**
 * how do you create an event in react?
 * there are some rules to create an event in react like-
 * camelCase naming convention of event 
 * pass event as function
 * prevent the default
 */

function EventApp(event){

    function doSomething(event){
        event.preventDefault();
        alert("Waah kya baat hai You just clicked on button");
    }


    return (
        <>
            <center>Demo of Event in React</center>
            <button onClick={doSomething}>Click here!</button>
        </>
    )
}
<<<<<<< HEAD
export default EventApp;
=======
export default EventApp;
>>>>>>> 53ce61c600970aa99fb9db89799f7cb31cdd9b91
