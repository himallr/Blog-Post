import { React, useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Login';
import User from './User';
import AddBlog from './AddBlog';
import { authActions } from './Store';
import { useDispatch, useSelector } from 'react-redux';
import Blogs from './Blogs';
import UserBlogs from './UserBlogs';
import UpdateBlogs from './UpdateBlogs';
import AllBlogs from './AllBlogs';

const App = () => {

    const dispath = useDispatch();

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);
    useEffect(() => {
        if (localStorage.getItem("UserID")) {
            dispath(authActions.login());
        }
    }, [dispath]);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path='/User' element={<User />}></Route>
                <Route path='/AddBlog' element={<AddBlog />}></Route>
                <Route path='/Blogs' element={<Blogs />}></Route>
                <Route path='/All' element={<AllBlogs />}></Route>
                <Route path='/UserBlogs' element={<UserBlogs />}></Route>
                <Route path='/UpdateBlogs/:id' element={<UpdateBlogs />}></Route>
            </Routes>
        </div>
    )
}

export default App
