import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user-routes.js';
import cors from 'cors';
import BlogRouter from './routes/blog-routes.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
<<<<<<< HEAD
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/blog", BlogRouter);
=======
app.use(cors({
    origin: ["https://blog-post-frontend-psi.vercel.app"],
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello");
})
app.use("/user",userRoute);
app.use("/blog",BlogRouter);
>>>>>>> origin/main

mongoose.connect('mongodb+srv://himallr2003:51pXlgpE4q9oZhIc@cluster0.tdcr3z4.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3001, () => {
            console.log("Connected to mongodb and Listening to port 3001");
        })
    })
    .catch((err) => { console.log(err); })

//51pXlgpE4q9oZhIc
