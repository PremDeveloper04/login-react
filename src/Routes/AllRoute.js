import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Form/Login'
import Register from '../Form/Register'
import MainLayout from '../Layout/MainLayout'
import Dashboard from '../Auth/Dashboard'
import Profile from '../Auth/Profile'
import ProtectRoute from './ProtectRoute'
import OpenRoute from './OpenRoute'

const AllRoute = () => {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<OpenRoute><Login /></OpenRoute>} />
                <Route path="/register" element={<OpenRoute><Register /></OpenRoute>} />

                <Route element={<ProtectRoute><MainLayout /></ProtectRoute>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoute
