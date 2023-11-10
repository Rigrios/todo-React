import React from 'react';
import style from './Create.module.css'
import Input from './input/Input';
import Menu from './menu/Menu';
import { useDispatch } from 'react-redux';
import {setNotes} from '../../reducers/todoReducer'
import { reset } from 'redux-form';



function Create(props) {
    const dispatch = useDispatch()
        function addNotesText (values) {
        dispatch(setNotes(values.text))
        dispatch(reset("todoText"))
    }
     return ( 
        <div className={style.create}>
            <Menu />
            <Input onSubmit={addNotesText} />
        </div>
     );
}

export default Create;