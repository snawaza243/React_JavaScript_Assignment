import myData from './tableData.json'
export default function ReactTable(){

    return(
        <>
            <div className="tableBox">
                <table>
                    <tbody>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                        {myData.map((item,i)=>{return(
                            // <tr key={i}><td> {item.name} </td> <td> {item.age} </td> <td> {item.gender} </td></tr>
                            <p>Name: {item.name} Age: {item.age} Gender: {item.gender}</p>
                        )})}
                    </tbody>
                </table>
            </div>
        </>
    )
}