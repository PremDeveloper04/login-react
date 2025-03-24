import React, { useContext, useState, useEffect } from 'react';
import { AuthData } from '../AuthContext'
import Button from '../Form/Button'
import Input from '../Form/Input';
import axios from 'axios';
import useAxiosApi from './useAxiosApi';

const Profile = () => {
  const fetchData = useAxiosApi();
  const { user, token } = useContext(AuthData);

  const { name, email, created_at, avatar = "https://fastly.picsum.photos/id/391/200/300.jpg?hmac=3xP-y2PRN2E0__aPOCp1sja7XrimKgLQAMiSaNd0Cko" } = user;

  const [formState, setFormState] = useState({
    data: {
      name: "",
      email: "",
      password: "",
      id:'',
    },
    errors: {
      name: "",
      email: "",
      password: ""
    },
  });

  const [apiResponse,setApiResponse] = useState({type:'',message:''});

  useEffect(() => {
    if (user) {

      setFormState((prev) => ({
        ...prev,
        data: {
          name: user.name,
          email: user.email,
          password: "1234567",
          id: user.id
        }
      }))

    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formState.data.name == '') {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          name: 'Name is required'
        }
      }))
    } else {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          name: ''
        }
      }))
    }

    if (formState.data.email == '') {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          email: 'Email is required'
        }
      }))
    } else {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          email: ''
        }
      }))
    }

    if (formState.data.password == '') {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          password: 'Password is required'
        }
      }))
    } else {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          password: ''
        }
      }))
    }


    const callApi = await fetchData('user/edit','post', formState.data, true)

    if(callApi.success == true){
      setApiResponse({type:'success', message:'User updated successfully'});
    }else{
      setApiResponse({type:'error' ,message: callApi?.response ? callApi?.response : 'User updatation failed ??'});
    }

    
  }

  return (
    // <div className="container d-flex justify-content-center mt-5">
    <div className="container mt-5">
      <div className='row'>

        <div className='col-4'>
          <div className="card text-center shadow-lg" style={{ width: '22rem' }}>
            <div className="card-body">
              <img
                src={avatar}
                alt="Profile"
                className="rounded-circle border border-secondary mb-3"
                width="120"
                height="120"
              />
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle text-muted">{email}</h6>
              <p className="card-text mt-2">Full Stack Developer | React & Laravel Enthusiast</p>
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>


        <div className='col-8'>
          <div className="card shadow-lg">
            <div className="card-body">
              {apiResponse.message && (
                  <div className={`alert ${apiResponse.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                      {apiResponse.message}
                  </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <Input type="text" class="form-control" placeholder="Enter your name" name="name" label="Name" error={formState?.errors?.name} value={formState?.data?.name} onChange={(e) => {
                    setFormState((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        name: e.target.value
                      }
                    }))
                  }} />
                </div>
                <div className="form-group mb-3">
                  <Input type="text" class="form-control" placeholder="Enter your email" name="email" label="Email" error={formState?.errors?.email} value={formState?.data?.email} onChange={(e) => {
                    setFormState((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        email: e.target.value
                      }
                    }))
                  }} />
                </div>
                <div className="form-group mb-3">
                  <Input type="text" class="form-control" placeholder="Enter your password" name="password" label="Password" error={formState?.errors?.password} value={formState?.data?.password} onChange={(e) => {
                    setFormState((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        password: e.target.value
                      }
                    }))
                  }} />
                </div>
                <Button type="submit" name="submit" class="btn btn-success btn-md w-100" naming="Update" />
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
