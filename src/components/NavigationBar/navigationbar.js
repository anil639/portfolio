import React from 'react'
import './navigationbar.css'
import { BsList } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-white  ">
                <div className='container'>
                    <NavLink className="navbar-brand" to="/portfolio"><span className='name'>Anil Kumar Nayak</span></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navigation-icon'>
                            <BsList />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/portfolio">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/education">Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/experience">Experience</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/project">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactMe">Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavigationBar