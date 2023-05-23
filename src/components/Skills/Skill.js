import React from 'react'
import './Skill.css'
import Cards from './Cards'
import SkillData from './SkillData'
const Skill = () => {
    return (
        <div >
            <div className='' >
                <h1 className='skill_heading' >Skills & Proficiency</h1>
                <div >
                    <Cards details={SkillData} />
                </div>
            </div>

        </div>
    )
}

export default Skill