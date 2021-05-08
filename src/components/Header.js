import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
function Header() {
    return (
        <div className='Header'>
            <IconButton >
            <PersonIcon className='header__icon'/>
            </IconButton>
            <img  src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"  alt="logo"  className='header__logo'/>
            <IconButton>  
                <QuestionAnswerIcon className='header__icon'/>
                </IconButton>
        </div>
    )
}

export default Header 
