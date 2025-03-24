import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    

    return (

        <div className="d-flex">
            {/* Sidebar */}

            <Sidebar SidebarVal={isSidebarOpen}/>

            {/* Main Content */}
            <div className="content flex-grow-1">

                <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}/>

                {/* Page Content */}
                <div className="container mt-4">
                    <Outlet />
                </div>
            </div>

            {/* Styles */}
            <style>
                {`
                .sidebar {
                    width: 250px;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    transition: width 0.3s;
                    overflow: hidden;
                    padding-top: 20px;
                }
                .sidebar.closed {
                    width: 60px;
                }
                .content {
                    margin-left: 250px;
                    transition: margin-left 0.3s;
                    width: 100%;
                }
                .sidebar.closed + .content {
                    margin-left: 60px;
                }
                `}
            </style>

        </div>
    )
}

export default MainLayout
