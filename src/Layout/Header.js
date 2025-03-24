import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../AuthContext';

const Header = (props) => {
    const {logout} = useContext(AuthData);
    const navigate = useNavigate();

    const handleLogout = () => { 
        logout();
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <button className="btn btn-light" style={{ marginLeft: "14px" }} onClick={props.toggleSidebar}>
                    ☰
                </button>
                <button className="btn btn-danger btn-sm" style={{marginRight:"15px"}} onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default Header
