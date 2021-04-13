import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/actions/countries'
import arrow from '../../Assets/image/arrow.png'
import exit from '../../Assets/image/exit.png'
import './Select.scss'

const Select = () => {

    const list = useSelector(state => state.countries)
    const dispatch = useDispatch()
    const [country, setCountry] = useState('Select Your Country')
    const [isClose, setIsClose] = useState(false)
    useEffect(() => { dispatch(getCountries()) })

    return (
        <>
            <div className={`Select ${isClose ? 'closeSelect' : 'openSelect'}`}>
                <div className={`header ${isClose ? 'closeHeader' : 'openHeader'}`}>
                    <div className='country'>{country}</div>
                    <div className='toggle' onClick={() => setIsClose(isClose => !isClose)}>
                        {isClose && <div className='close'>close</div>}
                        <div className='innerToggle'>
                            <img src={isClose ? exit : arrow} alt='' />
                        </div>
                    </div>
                </div>
                {isClose && <div className='selectList'>
                    {list.map(el => (
                        <div key={el.name} onClick={() => setCountry(el.name)} className='listRow'>
                            {el.name}
                        </div>))}
                </div>}
            </div>
        </>
    )
}

export default Select

