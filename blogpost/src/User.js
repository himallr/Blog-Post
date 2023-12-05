import React from 'react'
import Login from './Login'
import { sendUsers } from './ApiHelpers'
import { useNavigate } from 'react-router-dom'
import { authActions } from './Store'
import { useDispatch } from 'react-redux'

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = (datas) => {
        sendUsers(datas.inputs, datas.signup)
            .then((data) => {
                console.log(data);
                dispatch(authActions.login())
                localStorage.setItem("UserID", data.id);
                navigate("/");
            })
            .catch((e) => console.log(e))
    }
    return (
        <div className='container'>
            <Login onSubmit={data} />
        </div>
    )
}

export default User
