import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <div className={`bg-dark text-white sidebar ${props.SidebarVal ? "open" : "closed"}`}>
            <h4 className="text-center py-3">My Dashboard</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link text-white">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
