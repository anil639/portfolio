import React from 'react'
import { BsList } from "react-icons/bs";

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark ">
                <div className='container'>
                    <a className="navbar-brand" href="/"><span className='name'>Anil Kumar Nayak</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <BsList style={{ color: 'white' }} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavigationBar