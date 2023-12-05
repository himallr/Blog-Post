import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getblogsById, updateBlogs } from "./ApiHelpers";

const UpdateBlogs = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(inputs);
    };
    useEffect(() => {
        getblogsById(id).then((data) => {
            setBlog(data.blog);
            console.log(data.blog);
            // setInputs({
            //     title: data.blog.title,
            //     description: data.blog.description,
            //     image: data.blog.image,
            // });
        });
    }, [id]);
    console.log(blog);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        updateBlogs(inputs,id)
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
                                                <input type="text" name="title" onChange={handleChange} value={inputs.title} className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Description</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" name="description" className="form-control form-control-lg" onChange={handleChange} value={inputs.description} />
                                            </div>
                                        </div>
                                        {/* <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">

                        <h6 className="mb-0">Upload image</h6>

                      </div>
                      <div className="col-md-9 pe-5">

                        <input className="form-control form-control-lg" name="image" id="formFileLg" type="file" onChange={handleChange} value={inputs.image} />
                        <div className="small text-muted mt-2">Upload the image. Max file size 50 MB</div>

                      </div>
                    </div> */}
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Upload image</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input className="form-control form-control-lg" name="image" onChange={handleChange} value={inputs.image}></input>
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