import React from 'react';
import style from "./Body.module.css"
import Create from '../create/Create';
import TodoList from '../TodoList/TodoList';

function Body(props) {
    return ( 
        <div className={style.body}>
            <Create />
            <TodoList />
        </div>
     );
}

export default Body