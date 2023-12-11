import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlogs } from "./ApiHelpers";

//const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    date: ""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addBlogs(inputs)
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="vh-100" style={{ backgroundColor: "white" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <h1 className="text-dark mb-4">Add Your Posts</h1>
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
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Date</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input className="form-control form-control-lg" type="text" name="date" onChange={handleChange} value={inputs.date}></input>
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
                      <button type="submit" className="btn btn-primary btn-lg">Add Blog</button>
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

export default AddBlog;