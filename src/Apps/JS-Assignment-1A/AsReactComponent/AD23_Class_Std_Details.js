import React from 'react'

function AD23_Class_Std_Details() {
    class StdDetails{
        constructor()
        {
            this.name = 'Shahnawaz'
            this.roll = 2722
            this.branch = 'BTech'
            this.year = '3rd'
            this.collage = 'MMDU'
            this.location = 'Siwan, Bihar'
        }
    }
    const std1 = new StdDetails();

    return(
        <>
            <p>Name: {std1.name}</p>
            <p>Roll: {std1.roll} </p>
            <p>Branch: {std1.branch} </p>
            <p>Year: {std1.year} </p>
            <p>Collage: {std1.collage}</p>
            <p>Location {std1.location} </p>
        </>
    )
}

export default AD23_Class_Std_Details


