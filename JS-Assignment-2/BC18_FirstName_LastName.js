
function FormatName(){

    var user={
        firstName:'Shahnawaz',
        lastName:'Alam'
    }

    return(
        <>
            <h1>Display Full Name</h1>
            <p>First Name: {user.firstName} </p>
            <p>Last Name: {user.lastName} </p>
        </>
    )
}
export default FormatName;