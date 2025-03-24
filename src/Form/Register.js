import React, {useState, useContext} from 'react'
import Input from './Input'
import Button from './Button'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthData } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import useAxiosApi from '../Auth/useAxiosApi';

const Register = () => {
    const fetchData = useAxiosApi()
    const navigate = useNavigate();
    const {login} = useContext(AuthData);
    const [apiError, setApiError] = useState({api_error:'',api_success:''});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const callApi = await fetchData('register', 'post', data)

        if(callApi.success == true){
            setApiError({ api_success: "Registration successful!", api_error: "" })

            localStorage.setItem("token", callApi?.response?.token);
            localStorage.setItem("user", JSON.stringify(callApi?.response?.user));
            login(callApi?.response?.user, callApi?.response?.token)
            reset();
            navigate('/dashboard')


        }else{
            setApiError({ api_success: "", api_error: callApi?.response ? callApi?.response : "Registration Failed" })
        }
    };

    return (
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    {apiError.api_error && (
                        <div className="alert alert-danger" role="alert">
                            {apiError.api_error}
                        </div>
                    )}
                    {apiError.api_success && (
                        <div className="alert alert-success" role="alert">
                            {apiError.api_success}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <Input type="text" class="form-control" placeholder="Enter your name" name="name" label="Name" register={register("name", { required: "Name is required" })} error={errors.name?.message} />
                        </div>
                        <div className="form-group mb-3">
                            <Input type="text" class="form-control" placeholder="Enter your email" name="email" label="Email" register={register("email", { required: "Email is required" })} error={errors.email?.message} />
                        </div>
                        <div className="form-group mb-3">
                            <Input type="password" class="form-control" placeholder="Enter your password" name="Password" label="Password" register={register("password", { required: "Password is required" })} error={errors.password?.message} />
                        </div>
                        <Button type="submit" name="submit" class="btn btn-success btn-md w-100" naming="Submit" />
                        <p className='mt-2'>Already have an account? <Link to="/">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
