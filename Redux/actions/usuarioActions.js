import { ERROR_USUARIO, LOADING_USUARIO, LOGIN_USUARIO, CREAR_USUARIO } from '../types/usuarioTypes';
import API from '../api'

export const Login = (usuario) => async (dispatch) => {
    dispatch({
        type: LOADING_USUARIO
    })

    try {

        const request = await fetch(`${API}/Login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(usuario)
        });
        const resultado = await request.json();

        dispatch({
            type: LOGIN_USUARIO,
            payload: resultado
        })

    } catch (error) {
        console.error(error);
        dispatch({
            type: ERROR_USUARIO,
            payload: error
        })
    }
}


export const CrearUsuario = (usuario) => async (dispatch) => {
    dispatch({
        type: LOADING_USUARIO
    })

    try {

        await fetch(`${API}/Usuario`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(usuario)
        });

        const login = await fetch(`${API}/Login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(usuario)
        });

        const resultado = await login.json();

        dispatch({
            type: CREAR_USUARIO,
            payload: resultado
        })

    } catch (error) {
        console.error(error);
        dispatch({
            type: ERROR_USUARIO,
            payload: error
        })
    }
}