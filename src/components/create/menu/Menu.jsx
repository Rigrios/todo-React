import React from 'react';
import style from './Menu.module.css'
import {BiFontSize} from 'react-icons/bi'

function Menu(props) {
    return ( 
        <div className={style.menu}>
            <BiFontSize size={"30"} cursor={"pointer"}/>
        </div>
     );
}

export default Menu;