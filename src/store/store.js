import { configureStore, combineReducers} from '@reduxjs/toolkit'
import todoReducer from '../reducers/todoReducer'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    todo: todoReducer,
    form: formReducer
})

 const store = configureStore({
    reducer: reducers
})

export default store

window.store = store

