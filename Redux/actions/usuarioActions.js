import { ERROR_USUARIO, LOADING_USUARIO, LOGIN_USUARIO } from '../types/usuarioTypes';

export const Login = (usuario) => async (dispatch) => {
    dispatch({
        type: LOADING_USUARIO
    })

    try {

        const request = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/Login`, {
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