import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ onSubmit }) => {
    const [signup, setSignup] = useState(true);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
        //console.log(inputs);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email);
        onSubmit({ inputs, signup });
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-5 card col-md-8 col-sx-12' style={{ padding: "30px" }}>
                        <h1 className='d-flex justify-content-center'>{!signup ? "SignUp" : "Login"} Page</h1>
                        <div className='col-md-12 d-flex flex-column '>
                            {!signup &&
                                <div className='pt-2'>
                                    <label className='h3'>Enter Name:</label>
                                    <input type="text" className='border-dark rounded p-2 form-control mb-1' name="name" value={inputs.name} onChange={handleChange}></input>
                                </div>}
                            <div className='pt-4'>
                                <label className='h3'>Enter Email:</label><br></br>
                                <input type="email" className='border-dark rounded p-2 form-control mb-2' name='email' value={inputs.email} onChange={handleChange}></input>
                            </div>
                            <div className='pt-4 pb-4'>
                                <label className='h3'>Enter Password:</label>
                                <input type="password" className='border-dark rounded p-2 form-control mb-2' name='password' value={inputs.password} onChange={handleChange}></input>
                            </div>
                        </div>
                        <button className='bg-gray border rounded text-decoration-none text-bold pt-2 pb-2'>{signup ? "LOGIN" : "SIGNUP"}</button>
                        <div className='d-flex flex-row'>{signup ? "Create an Account? " : "Already have an account? "} <Link onClick={() => { setSignup(!signup) }} to="">{signup ? " SignUp" : " Login"}</Link></div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
