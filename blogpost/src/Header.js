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
        <div className='container-fluid bg-secondary pt-3 pb-3 justify-content-between'>
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
    )
}

export default Header
