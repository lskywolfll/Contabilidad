import { ERROR_USUARIO, LOADING_USUARIO, LOGIN_USUARIO, CREAR_USUARIO } from '../types/usuarioTypes';

const initialState = {
    loading: false,
    error: null,
    usuarios: [],
    token: null,
    usuario: null
}

export const usuarioReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_USUARIO: {

            const { token, usuario } = payload;

            return {
                ...state,
                usuario: usuario,
                token: token,
                loading: false,
            }
        }
        case LOADING_USUARIO:
            return {
                ...state,
                loading: true
            }
        case ERROR_USUARIO:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CREAR_USUARIO: {

            const { token, usuario } = payload;

            return {
                ...state,
                usuario: usuario,
                token: token,
                loading: false
            }
        }
        default:
            return state;
    }
}