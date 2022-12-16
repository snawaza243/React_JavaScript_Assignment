import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import CourseList from './CourseList';
import PostForm from './PostForm';
class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={< Layout />}>
                            <Route exact path='/course_list' element={< CourseList />}></Route>
                            <Route exact path='/course_list/post_form' element={< PostForm />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;