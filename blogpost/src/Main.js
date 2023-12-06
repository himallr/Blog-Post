import React, { useEffect, useState } from 'react'
import { getBlogs, getPagination } from './ApiHelpers';
import { Box, Typography } from '@mui/material';
import Blogs from './Blogs';

const Main = () => {

    const [pages, setPage] = useState(1);
    const [blogs, setBlogs] = useState([])
    const [allblogs, setAllBlogs] = useState([])
    const totalPages = 4;

    const onResReceived = (res) => {
        setBlogs(res.blogs);
        console.log(res);
    };
    useEffect(() => {
        getPagination(pages)
            .then(onResReceived)
            .catch((err) => console.log(err));


    }, [pages]);

    useEffect(() => {
        getBlogs()
            .then((data) => {
                setAllBlogs(data.blogs);
            })
            .catch((e) => console.log("error"));
    }, [])
    const handleLeftPagination = () => {
        if (pages > 1) {
            setPage(pages - 1);
        }
    }

    const handleRightPagination = () => {
        if (pages < allblogs.length / 3) {
            setPage(pages + 1);
        }
    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    console.log("Blogs pagination" + blogs);
    console.log("All BLogs" + allblogs);
    
    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
            <Box width={"auto"} padding={5}>
                <Typography variant="h4" textAlign={"center"}>Blogs</Typography>
            </Box>
            <div>
                <div className="container-fluid  ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sx-12">

                            <Box margin={"auto"} width={"100%"} flexWrap={"wrap"} style={{ justifyContent: "center" }}>
                                {
                                    blogs & blogs.map((e, index) =>
                                        <Blogs id={e._id} key={index} isUser={localStorage.getItem("UserID") === e.user._id} title={e.title} description={e.description} date={e.date} image={e.image} user={e.user.name} />
                                    )
                                }
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between py-4">
                        <span className='btn btn-secondary' onClick={handleLeftPagination}>Prev</span>
                        <div className="d-flex flex-row mx-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    type="button"
                                    className={`btn btn-secondary mx-2 ${pages === index + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}

                        </div>
                        <span className='btn btn-secondary' onClick={handleRightPagination}>Next</span>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Main
