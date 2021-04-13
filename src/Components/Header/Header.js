import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../../Assets/image/logo.png'
import icon from '../../Assets/image/Hamburger.png'
import './Header.scss'

const Header = () => {

    return (
        <>
            <div className='header'>
                <div className='topRop'>
                    <NavBar />
                </div>
                <div className='bottomRow'>
                    <div>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='btn'>
                        <img src={icon} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
