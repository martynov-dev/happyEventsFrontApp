import React from 'react';
import {Link} from 'react-router-dom';
import {useStore} from '../../store';


const Header: React.FC = () => {
    const {isLoggedIn} = useStore();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand ms-2">Happy Events</span>
            <button
                className="navbar-toggler me-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto ms-2">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <Link to="/my-places" className="nav-link">
                                    My places
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/recommendations" className="nav-link">
                                    Recommendations
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/registration" className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;