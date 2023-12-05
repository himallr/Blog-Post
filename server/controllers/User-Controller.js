import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const getUserDetails = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
        users = users.save();
    }
    catch (e) {
        console.log(e);
    }

    if (users) {
        return res.status(200).json({ users });
    }
    else {
        return res.status(500).json({ message: "Error" });
    }
}

export const addUserDetails = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(200).json({ message: "Invalid" });
    }
    const new_pass = bcrypt.hashSync(password);
    let users;
    try {
        users = new User({ name, email, password: new_pass,blogs:[] });
        users = users.save();
    }
    catch (e) {
        console.log(e);
    }
    console.log(users);
    if (users) {
        return res.status(200).json({ id: users._id });
    }
    else {
        return res.status(500).json({ message: "Error" });
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(200).json({ message: "Invalid" });
    }
    let users;
    try {
        users = await User.findOne({ email });
    }
    catch (e) {
        console.log(e);
    }
    console.log(users);
    if (!users) {
        return res.sendStatus(400).json({ message: "Unable to find user" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, users.password);

    if (isPasswordCorrect) {
        return res.status(200).json({ id: users._id });
    }
    return res.status(500).json({ message: "Invalid Data" });
}

export const deleteUserDetails = async (req, res, next) => {
    let users;
    const id = req.params.id;
    console.log(id);

    try {
        users = await User.findByIdAndRemove(id);
    }
    catch (e) {
        console.log(e);
    }
    console.log(users);

    if (users) {
        return res.status(201).json({ message: "Deleted" });
    }
    return res.status(500).json({ message: "Invalid" });

}

export const getUserDetailsbyId = async (req, res) => {
    let users;
    const id = req.params.id;
    try {
        users = await User.findById(id);
    }
    catch (e) {
        console.log(e);
    }
    if (users) {
        return res.status(200).json({ users });
    }
    return res.status(500).json({ message: "cannot find User" });
}