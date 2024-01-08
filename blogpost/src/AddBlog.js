import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlogs } from "./ApiHelpers";

//const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlog = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("UserID");
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    place: "",
    image: null,
    date: ""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const convertToB64 = (e) => {
    const file = e.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = () => {
        setInputs((prevInputs) => ({
          ...prevInputs,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addBlogs(inputs, user)
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
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Location</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="text" name="place" onChange={handleChange} value={inputs.place} className="form-control form-control-lg" />
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Date</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input className="form-control form-control-lg" type="date" name="date" onChange={handleChange} value={inputs.date}></input>
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Upload image</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input className="form-control form-control-lg" name="image" onChange={convertToB64} type="file"></input>
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