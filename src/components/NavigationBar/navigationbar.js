import React from 'react'
import './navigationbar.css'
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-white  ">
                <div className='container'>
                    <Link className="navbar-brand" to="/"><span className='name'>Anil Kumar Nayak</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navigation-icon'>
                            <BsList />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactMe">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavigationBar