import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import { sendRequest } from "./ApiHelpers";
const UserBlogs = () => {
    const [user, setUser] = useState();
    const id = localStorage.getItem("UserID");

    useEffect(() => {
        sendRequest(id)
            .then((data) => { setUser(data.userblogs); console.log(data.userblogs); });
    }, []);
    console.log(user);
    return (
        <div style={{marginLeft: "20%" ,marginRight: "20%"}}>
            <h1 className="text-center pt-3">My Blogs</h1>
            {" "}
            {user &&
                user.blogs &&
                user.blogs.map((blog, index) => (
                    <Blogs
                        id={blog._id}
                        date={blog.date}
                        key={index}
                        isUser={true}
                        title={blog.title}
                        description={blog.description}
                        place={blog.place}
                        image={blog.image}
                        userName={user.name}
                    />
                ))}
        </div>
    );
};

export default UserBlogs;