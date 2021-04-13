import React from 'react'
import { Link } from 'react-router-dom'
import flashDown from '../../Assets/image/fleshdown .png'
import './DropDown.scss'

const DropDown = ({label, DropDownList}) => {
    return (
        <>
            <li className='DropDown'>
                <div className='label'>{label}</div>
                <div className='iconContainer'><img src={flashDown} alt=''/></div>
                <ul className='dropDownList'>
                    {
                       DropDownList.map(obj => (
                       <li key={obj.id} className='' >
                           <Link to={obj.url} className='link'>
                               {obj.clubName}
                            </Link>
                        </li>
                        )) 
                    }
                </ul>
            </li>
        </>
    )
}

export default DropDown
