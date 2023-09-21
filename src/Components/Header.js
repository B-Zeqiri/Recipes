import React, { useContext, useState } from 'react'
import '../Style/Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineStar} from 'react-icons/ai'
import logo from '../Assets/headerLogo.png'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/MainContext'

const Header = () => {

  const [open, setOpen] = useState(false);
  const {logout} = useContext(MainContext);

  return (
    <div className='headerWrapper'>
        <div className='headerLogo'>
           <img src={logo} alt='Logo'/>
        </div>
        <div className='middleDiv'>
            <AiOutlineStar />
            <AiOutlineStar size={20}/>
            <AiOutlineStar size={25}/>
            <AiOutlineStar size={20}/>
            <AiOutlineStar />
        </div>
        <div className='thirdDiv'>
          <p>Recipes...</p>
        </div>
        <div className='rightDiv'>
          {
            <GiHamburgerMenu 
            size={30} 
            className='menu'
            onClick={()=>{
              setOpen(!open);
            }}/>
          }
          {
            open ? (
              <div className='headerLinks'>
              <Link to='/HomePage' className='links'>Home</Link>
              <Link  to='/AddRecipes' className='links'>Add Recipes</Link>
              <Link to='/UpdateList' className='links'>Update/Delete Recepies</Link>
              <button onClick={logout} className='links'>Logut</button>
            </div>
            ) :(
              <></>
            )
        }  
        </div>
    </div>
  )
}

export default Header