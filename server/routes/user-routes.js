import express from 'express';
import { addUserDetails, deleteUserDetails, getUserDetails,getUserDetailsbyId, login } from '../controllers/User-Controller.js';

const userRoute = express.Router();

userRoute.get("/",getUserDetails);
userRoute.get("/:id",getUserDetailsbyId);
userRoute.post("/addUser",addUserDetails);
userRoute.post("/login",login);//prob
userRoute.delete("/:id",deleteUserDetails);

export default userRoute;