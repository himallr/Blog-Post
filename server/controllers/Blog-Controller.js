import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import User from "../models/User.js";

export const display = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find().populate("user");
    }
    catch (e) {
        console.log(e);
    }
    if (blogs) {
        return res.status(200).json({ blogs });
    }
    return res.status(500).json({ message: "No Blogs found" });
}

export const addBlog = async (req, res, next) => {
    const { title, image, description, place, date, user } = req.body;

    let existinguser;
    try {
        existinguser = await User.findById(user);
    }
    catch (e) {
        console.log(e);
    }
    console.log(existinguser);
    if (!existinguser) {
        return res.status(500).json({ message: "No user exists" });
    }
    let blogs;
    if (!title || !image || !description || !date) {
        return res.status(200).json({ message: "Error" });
    }
    blogs = new Blog({ title, image, description, place, date: new Date(`${date}`), user: existinguser });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blogs.save({ session });
        existinguser.blogs.push(blogs);
        await existinguser.save({ session });
        await session.commitTransaction();
    }
    catch (e) {
        console.log(e);
    }
    console.log(Blog);
    if (blogs) {
        return res.status(200).json({ blogs })
    }
    return res.status(500).json({ message: "Error" });
}

export const updateBlog = async (req, res, next) => {
    const { title, image, description, place } = req.body;
    const id = req.params.id;
    console.log(id);
    let blogs;
    if (!id) {
        return res.status(200).json({ message: "Wrong id" });
    }
    try {
        blogs = await Blog.findByIdAndUpdate(id, { title, image, description, place });
        blogs = blogs.save();
    }
    catch (e) {
        console.log(e);
    }
    console.log(blogs);

    if (blogs) {
        return res.status(200).json({ blogs });
    }
    return res.status(500).json({ message: "Can't Update" });
}

export const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id).populate("user");
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await blog.user.blogs.pull(blog);
        // await blog.user.save({ session });
        // await session.commitTransaction();
    }
    catch (e) {
        console.log(e);
    }
    if (blog) {
        return res.status(200).json({ message: "Deleted successfully" });
    }
    return res.status(500).json({ message: "Wrong id/Cannot delete" });
}

export const getBlogbyId = async (req, res, next) => {
    const id = req.params.id;
    let blogs;
    try {
        blogs = await Blog.findById(id);
    }
    catch (e) {
        console.log(e);
    }
    console.log(blogs);
    if (blogs) {
        return res.status(200).json({ blogs });
    }
    return res.status(500).json({ message: "No Blog Found" });
}

export const getBlogbyPagination = async (req, res, next) => {
    const pages = req.query.p;
    console.log("pages");
    const bookperpage = 3;
    let bloggs = [];
    let blogs;
    try {
        blogs = await Blog.find().sort({ title: 1 }).skip((pages - 1) * bookperpage).limit(bookperpage).populate("user");
        blogs.forEach(blog => {
            bloggs.push(blog);
        });
    }
    catch (e) {
        console.log(e);
    }
    console.log(blogs);
    if (blogs) {
        return res.status(200).json({ blogs });
    }
    return res.status(500).json({ message: "No Blog Found" });
}

export const getidbyuser = async (req, res, next) => {
    const id = req.params.id;
    let userblogs;

    try {
        userblogs = await User.findById(id).populate("blogs");
    }
    catch (e) {
        console.log(e);
    }
    if (userblogs) {
        return res.status(200).json({ userblogs });
    }
    return res.status(500).json({ message: "No id found" });
}
