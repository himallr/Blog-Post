import { Box, Button, Typography, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs.js";
import { getBlogs } from "./ApiHelpers.js";
import { Link } from "react-router-dom";

function Main2() {

  const [more, setMore] = useState(false)
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs()
      .then((data) => {
        setBlogs(data.blogs);
      })
      .catch((e) => console.log("error"));
  }, []);
  console.log(blogs);
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box width={"auto"} padding={5}>
        <Typography variant="h4" textAlign={"center"}>Blogs</Typography>
      </Box>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-8 col-sx-12">
            <Box margin={"auto"} width={"100%"} flexWrap={"wrap"} style={{ justifyContent: "center" }}>
              {
                blogs.slice(3).map((e, index) =>
                  <Blogs id={e._id} key={index} isUser={localStorage.getItem("UserID") === e.user._id} title={e.title} description={e.description} date={e.date} image={e.image} user={e.user.name} />
                )
              }
            </Box>
          </div>
        </div>
      </div>
      <Box width={"auto"} padding={5} justifyContent={"center"} marginLeft={"43%"}>
        <Button LinkComponent={Link} to="/All" variant="contained" sx={{ bgcolor: "#184e77" }} onClick={() => setMore(true)} >More
        </Button>
      </Box>
    </Box>
  );
}

export default Main2;