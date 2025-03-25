import React, { useContext } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Form/Login'
import Register from '../Form/Register'
import MainLayout from '../Layout/MainLayout'
import Dashboard from '../Auth/Dashboard'
import Profile from '../Auth/Profile'
import ProtectRoute from './ProtectRoute'
import OpenRoute from './OpenRoute'

const AllRoute = () => {

    return (
        <HashRouter>

            <Routes>
                <Route path="/" element={<OpenRoute><Login /></OpenRoute>} />
                <Route path="/register" element={<OpenRoute><Register /></OpenRoute>} />

                <Route element={<ProtectRoute><MainLayout /></ProtectRoute>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AllRoute
