import { combineReducers } from 'redux';
import { usuarioReducer } from './usuarioReducer';
import { remuneracionReducer } from './remuneracionReducer';

export default combineReducers(({
    // post: postReducer
    usuarioReducer,
    remuneracionReducer
}))