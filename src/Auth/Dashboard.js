import React, { useContext } from 'react'
import { AuthData } from '../AuthContext'

const Dashboard = () => {
  const {user} = useContext(AuthData);
  return (
    <div className='container'>
      <div className='row py-5 col-12 bg-light border border-dark border-1 rounded'>
        <h1 className='text-success text-center font-bold'>Welcome, {user?.name || "Guest"}</h1>
      </div>
    </div>
  )
}

export default Dashboard
