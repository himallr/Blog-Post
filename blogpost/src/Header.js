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
            <Link className="navbar-brand text-white" to="/">E-book</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon color-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='row'>
                    <div className='col-md-3'>
                        <Link className=' h4 text-white text-decoration-none' to="/">BLOG POST</Link>
                    </div>
                    {isUserLoggedIn ?
                        <div className='col-md-6'>
                            {/* <Box width={"80%"} margin={"auto"}>
                        <Autocomplete
                            //onChange={handlechange}
                            options={movies && movies.map((e) => e.title)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <input type='text'></input>}
                        />
                    </Box> */}
                        </div>
                        :
                        <div className='col-md-8'></div>
                    }
                    {isUserLoggedIn &&
                        <div className='col-md-1'>
                            <Link to="/AddBlog" className='h5 text-decoration-none text-white'>ADD BLOG</Link>
                        </div>
                    }
                    {isUserLoggedIn &&
                        <div className='col-lg-1 col-md-1'>
                            <Link to="/UserBlogs" className='h5 text-decoration-none text-white'>MY BLOGS</Link>
                        </div>
                    }
                    {!isUserLoggedIn ?
                        <div className='col-lg-1 col-md-1'>
                            <Link to="/User" className='h5 text-decoration-none text-white'>LOGIN</Link>
                        </div> :
                        <div className='col-lg-1 col-md-1'>
                            <Link to="/" className='h5 text-decoration-none text-white' onClick={() => { logout() }}>LOGOUT</Link>
                        </div>

                    }
                </div>
            </div>
        </nav >
    )
}

export default Header
