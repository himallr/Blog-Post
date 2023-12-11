import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user-routes.js';
import cors from 'cors';
import BlogRouter from './routes/blog-routes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user",userRoute);
app.use("/blog",BlogRouter);

mongoose.connect(`mongodb+srv://himallr2003:${process.env.PASSWORD}@cluster0.tdcr3z4.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3001, () => {
            console.log("Connected to mongodb and Listening to port 3001");
        })
    })
    .catch((err) => { console.log(err); })

//51pXlgpE4q9oZhIc