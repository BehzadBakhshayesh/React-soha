import React from 'react'
import NavItem from '../NavItem/NavItem'
import DropDown from '../DropDown/DropDown'
import './NavBar.scss'

const DropDownList = [
    {
        id:1,
        clubName:'Soccer',
        url:'/search',
    },
    {
        id:2,
        clubName:'Tennis',
        url:'/search'
    },
    {
        id:3,
        clubName:'Basketball',
        url:'/search',
    }
]

const NavBar = () => {
    return (
        <>
            <ul className='NavBar'>
                <DropDown label='Your Club' DropDownList={DropDownList}/>
                <NavItem linkTo='/search' text='Fixtures'/>
                <NavItem linkTo='/search' text='Resuls'/>
                <NavItem linkTo='/search' text='Social'/>
                <NavItem linkTo='/search' text='Tables'/>
                <NavItem linkTo='/search' text='Tickets'/>
                <NavItem linkTo='/' text='Home'/>
            </ul>
        </>
    )
}

export default NavBar
