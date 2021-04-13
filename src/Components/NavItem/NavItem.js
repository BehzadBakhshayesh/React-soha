import React from 'react'
import {Link} from 'react-router-dom'
import './NavItem.scss'

const NavItem = ({linkTo, text}) => {
  
    return (
        <>
          <li className='NavItem'>
              <Link to={linkTo} className='link'>
                  <div>{text}</div>
              </Link>
          </li>  
        </>
    )
}

export default NavItem

