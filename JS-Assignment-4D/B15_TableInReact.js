
export default function ReactTable(){
    const data = [
        {name:'sam',age:22,gender:'M'},
        {name:'sid',age:20,gender:'F'},
        {name:'Alam',age:22,gender:'M'}
    ]

    return(
        <>
            <div className="tableBox">
                <table>
                    <tbody>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                        {data.map((item,i)=>{return(
                            <tr key={i}><td> {item.name} </td> <td> {item.age} </td> <td> {item.gender} </td></tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </>
    )
}