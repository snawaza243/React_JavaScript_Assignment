import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
export default function WebPage (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element = {<Home/>} />
                    <Route path='login' element={<Login/>} />
                    <Route path='signup' element={<Signup/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}