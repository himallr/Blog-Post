import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from './Store';
//import { Autocomplete, Box } from "@mui/material";

const Header = () => {

    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isUserLoggedIn);

    const logout = () => {
        dispatch(authActions.logout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary px-3" style={{ "paddingLeft": "0px" }}>
            <Link className="navbar-brand text-white" to="/">BLOG POST</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon color-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="form-inline navbar-nav ml-auto">
                    {isUserLoggedIn &&
                        <ul className='navbar-nav mr-auto'>
                            <li className="nav-item mx-2 my-2">
                                <Link to="/AddBlog" className='h5 text-decoration-none text-white'>ADD BLOG</Link>
                            </li>
                        </ul>
                    }
                    {isUserLoggedIn &&
                        <ul className='navbar-nav mr-auto'>
                            <li className="nav-item mx-2 my-2">
                                <Link to="/UserBlogs" className='h5 text-decoration-none text-white'>MY BLOGS</Link>
                            </li>
                        </ul>
                    }
                    {!isUserLoggedIn ?
                        <ul className='navbar-nav mr-auto'>
                            <li className="nav-item mx-2 my-2">
                                <Link to="/User" className='h5 text-decoration-none text-white'>LOGIN</Link>
                            </li>
                        </ul> :
                        <ul className='navbar-nav mr-auto'>
                            <li className="nav-item mx-2 my-2">
                                <Link to="/" className='h5 text-decoration-none text-white' onClick={() => { logout() }}>LOGOUT</Link>
                            </li>
                        </ul>
                    }
                </ul>
            </div>
        </nav >
    )
}

export default Header
