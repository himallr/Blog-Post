import axios from "axios";
import { useParams } from "react-router-dom";

export const sendUsers = async (datas, signup) => {
    console.log(signup);
    const res = await axios.post(`http://localhost:3001/user/${!signup ? "addUser" : "login"}`, {
        name: !signup ? datas.name : "",
        email: datas.email,
        password: datas.password
    })
        .catch((e) => { console.log(e); })
    console.log(res.status);
    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resDatas = await res.data;
    console.log(resDatas.email);
    return resDatas;
}

export const addBlogs = async (datas) => {
    console.log(datas);
    const res = await axios.post("http://localhost:3001/blog/addblogs", {
        title: datas.title,
        description: datas.description,
        image: datas.image,
        date: datas.date,
        user: localStorage.getItem("UserID"),
    })
        .catch((err) => console.log(err));
    console.log(res.status);
    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

export const getBlogs = async () => {
    const res = await axios.get("http://localhost:3001/blog/get")
        .catch((e) => console.log(e))
    
    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resDatas = await res.data;
    console.log(resDatas);
    return resDatas;
}

export const getPagination = async (p) => {
    const res = await axios.get(`http://localhost:3001/blog/getbyPagination?p=${p}`)
        .catch((e) => console.log(e))
    
    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resDatas = await res.data;
    console.log(resDatas);
    return resDatas;
}

export const getblogsById = async (id) => {
    const res = await axios
      .get(`http://localhost:3001/blog/getbyid/${id}`)
      .catch((err) => console.log(err));
    const resData = await res.data;
    return resData;
  };

export const deleteBlogs = async (id) => {
    const res = await axios.delete(`http://localhost:3001/blog/deleteBlogs/${id}`)
        .catch((e) => console.log(e))

    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resDatas = await res.data;
    return resDatas;
}

export const updateBlogs = async (datas,id) => {
    console.log(id);
    const res = await axios.put(`http://localhost:3001/blog/updateBlogs/${id}`, {
        title: datas.title,
        description: datas.description,
        image: datas.image,
    })
        .catch((err) => console.log(err));
    console.log(res.status);
    if (res.status !== 200) {
        console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

export const sendRequest = async (id) => {
    const res = await axios
        .get(`http://localhost:3001/blog/getUserBlog/${id}`)
        .catch((err) => console.log(err));

        console.log(res.data);
    const data = await res.data;
    return data;
};