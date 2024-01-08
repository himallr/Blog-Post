import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getblogsById, updateBlogs } from "./ApiHelpers";

const UpdateBlogs = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: "",
        description: "",
        place: "",
        image: '',
    });
    const id = useParams().id;
    console.log(id);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const blogDetails = await getblogsById(id);
                setBlog(blogDetails.blogs);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]);
    console.log(blog);

    const handleChange = (e) => {
        setBlog((prevblog) => (
            {
                ...prevblog,
                [e.target.name]: e.target.value,
            }));
    };

    const convertToB64 = (e) => {
        const file = e.target.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = () => {
                setBlog((prevInputs) => ({
                    ...prevInputs,
                    image: reader.result,
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blog);
        updateBlogs(blog, id)
            .then((data) => console.log(data))
            .then(() => navigate("/UserBlogs"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section className="vh-100" style={{ backgroundColor: "white" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-9">
                                <h1 className="text-dark mb-4">Update Your Posts</h1>
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body">
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Title</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" name="title" value={blog.title} onChange={handleChange} className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Description</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" name="description" className="form-control form-control-lg" value={blog.description} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Location</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" name="place" className="form-control form-control-lg" value={blog.place} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Upload image</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input className="form-control form-control-lg" type="file" name="image" onChange={convertToB64}></input>
                                            </div>
                                        </div>
                                        <hr className="mx-n3"></hr>
                                        <div className="px-5 py-4 text-center">
                                            <button type="submit" className="btn btn-primary btn-lg">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default UpdateBlogs;