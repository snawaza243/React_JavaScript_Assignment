// not working
/**
*Note : Currently not working
*/
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "semantic-ui-react"

function SearchAppPosts() {
    const [apiData, setApiData] = useState([])
    const [filteredResult, setFilteredResult] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { setApiData(response.Data) })
    }, [])

    const SearchItem = (SearchValue) => {
        setSearchInput(SearchValue)
        if (searchInput !== ' ') {
            const filteredData = apiData.filter((item) => {
                return object.values(item).join(''.toLowerCase().includes(searchInput.toLowerCase()))
            })
            setFilteredResult(filteredData)
        } 
        else { 
            setFilteredResult(apiData) 
        }

        return (
            <>
                <div>
                    <input type="text" icon='search' placeholder="Search..." onChange={(e) => searchItems(e.target.value)} />
                    <Card.Group itemPreRow={3} >
                        {searchInput.length.filteredResult.map((item) => {
                            return (
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            {item.name}
                                        </Card.Header>
                                        <Card.Description>
                                            {item.email}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <input type="text" icon='search' placeholder="Search..." />
                <Card.Group itemPreRow={3} style={{ margin: 20 }}> {apiData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    {item.name}
                                </Card.Header>
                                <Card.Description>
                                    {item.email}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
                </Card.Group>
            </div>
        </>
    )
}export default SearchAppPosts