import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { DeleteForeverOutlined } from "@mui/icons-material/";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import { deleteBlogs, getBlogs, updateBlogs } from './ApiHelpers';

const Blogs = ({ title, date, description, image, id, isUser, user }) => {
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
    const handleDelete = () => {
        deleteBlogs(id)
            .then(() => navigate("/"))
            .catch((err) => console.log(err));
    };

    const handleUpdate = (e) => {
        navigate(`/UpdateBlogs/${id}`)
    }
    return (
        <Card sx={{ minWidth: 200, height: "100%", margin: 4, borderRadius: 5 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} flex={"column"} justifyContent={"space-between"} textAlign={"center"} color="text.secondary" gutterBottom>
                    <div className='d-flex justify-content-between'>
                        <div>
                            {
                                isUser ? "My Post" : user + "'s Post"
                            }
                        </div>
                        {isUser &&
                            <div className=''>
                                <IconButton
                                    onClick={() => handleUpdate()}
                                    color="black">

                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDelete()}
                                    color="black"
                                >
                                    <DeleteForeverOutlined />
                                </IconButton>
                            </div>
                        }
                    </div>
                </Typography>
                <CardMedia
                    sx={{ height: 400 }}
                    image={image}
                    title={title}
                />
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Place : <span className='text-dark'>{title}</span>
                </Typography>
                <Typography variant="body2">
                    {description}
                    <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} style={{display: "flex" , flexDirection: "column" ,alignItems:"flex-end"}} color="text.secondary">
                    {new Date(date).toDateString()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Blogs
