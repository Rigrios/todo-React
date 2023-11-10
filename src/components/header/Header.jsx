import React from 'react';
import style from './Header.module.css'
import {AiFillFilePpt} from "react-icons/ai"

function Header (props) {
    return ( 
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.headerBody}>
                    <div className="logo">ToDo</div>
                    <AiFillFilePpt color='green' />
                </div>
            </div>
            
        </div>
     );
}

export default Header 