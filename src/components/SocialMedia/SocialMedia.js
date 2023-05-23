import React from 'react'
import './SocialMedia.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
    return (
        <div className='icon-container'>
            <a href="https://github.com/Anil-Kumar-nayak-639">
                <span className='h-icon'>
                    <BsGithub size={30} style={{ color: 'white' }} />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/anil-kumar-nayak-39a85a18a/">
                <span className='h-icon'>
                    <BsLinkedin size={30} style={{ color: '#0A66C2' }} />
                </span>
            </a>
            <a href="mailto:anilkumarnayak639@gmail.com">
                <span className='h-icon'>
                    <SiGmail size={30} style={{ color: 'red' }} />
                </span>
            </a>
        </div>
    )
}

export default SocialMedia