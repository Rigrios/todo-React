import React from 'react';
import style from './TodoList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteNotes } from '../../reducers/todoReducer';
import {MdDelete} from 'react-icons/md'
import {AiOutlineFileDone} from 'react-icons/ai'
import {useState} from 'react'

function TodoList(props) {
    let notes = useSelector(state => state.todo.notes)
    let dispatch = useDispatch()
    return ( 
        <div className={style.todoList}>
            {notes.map(el => <TodoText text={el.text} id={el.id} dispatch={dispatch} />)}
        </div>
     );
}

export default TodoList;

function TodoText (props) {
    let [doneActiv, setdoneActiv] = useState(false) 
    let done = {
        textDecoration : doneActiv &&  "line-through"
    }
    function doneChange () {
        if (doneActiv) {
            setdoneActiv(false)
        } else {
            setdoneActiv(true)
        }
        console.log(doneActiv)
    }
 
    function deleteNote () {
        props.dispatch(deleteNotes(props.id))
        
    }
    return (
        <div className={style.todoText}>
            <div className={style.text} style={done}>{props.text}</div>
            <div className={style.todoTextMenu}>
                <AiOutlineFileDone size={'30'} color='green' onClick={doneChange}  />
                <MdDelete size={'30'} color='red' onClick={deleteNote} cursor={"pointer"} />
            </div>
        </div>
    )
}