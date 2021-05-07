import React from 'react'
import './ButtonBar.css'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { green, red } from '@material-ui/core/colors';
function ButtonBar() {
    return (
        <div className='buttonbar'>
            <IconButton className='button'>
                <CloseIcon className='button__icon' style={{ color: red[500] }}/>
            </IconButton>
            <IconButton className='button'>
                <FavoriteIcon   className='button__icon'  style={{ color: green[500] }}/>
            </IconButton>
       
        </div>
    )
}

export default ButtonBar
