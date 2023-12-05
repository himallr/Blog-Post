import express from 'express';
import { display, addBlog, updateBlog, deleteBlog, getBlogbyId, getidbyuser, getBlogbyPagination } from '../controllers/Blog-Controller.js';

const BlogRouter = express.Router();

BlogRouter.get("/get", display);
BlogRouter.get("/getbyPagination", getBlogbyPagination);
BlogRouter.get("/getbyid/:id",getBlogbyId);
BlogRouter.post("/addBlogs", addBlog);
BlogRouter.put("/updateBlogs/:id", updateBlog);
BlogRouter.delete("/deleteBlogs/:id",deleteBlog);
BlogRouter.get("/getUserBlog/:id",getidbyuser);

export default BlogRouter;