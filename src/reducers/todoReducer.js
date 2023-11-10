
import { createSlice } from "@reduxjs/toolkit";
import { reset } from "redux-form";

const counterSlice = createSlice({
    name: 'todo',
    initialState: {
        notes: [
            {
                id: 1,
                text: "Hi! me names Igor"
            },
            {
                id: 2,
                text: "Rigrios is Riga"
            },
            {
                id: 3,
                text: "JavaScript && React.js"
            },
        ]
    },
    reducers: {
        setNotes: (state, action) => {
            let text =  {
                    id: state.notes.length + 1,
                    text: action.payload
                };
            state.notes.push(text)
        },
        deleteNotes: (state, action) => {
            state.notes = state.notes.filter(el => el.id !== action.payload)
            
        }
    }
})

export const { setNotes, deleteNotes} = counterSlice.actions

export default counterSlice.reducer