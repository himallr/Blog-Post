import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogs } from './ApiHelpers';
import Blogs from './Blogs';

const AllBlogs = ({ title, date, description, image, id, isUser, user }) => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    const onResReceived = (res) => {
        setBlogs(res.blogs);
    };
    useEffect(() => {
        getBlogs()
            .then(onResReceived)
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sx-12">
                        <Box margin={"auto"} width={"100%"} flexWrap={"wrap"}>
                            {
                                blogs.map((e, index) =>
                                    <Blogs id={e._id} key={index} isUser={localStorage.getItem("UserID") === e.user._id} title={e.title} description={e.description} date={e.date} image={e.image} user={e.user.name} />
                                )
                            }
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default AllBlogs
