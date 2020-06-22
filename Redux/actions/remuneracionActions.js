import { ERROR_REMUNERACION, LOADING_REMUNERACION, TREAER_TODOS } from '../types/remuneracionTypes';
import API from '../api';

export const traerTodos = () => async (dispatch, getStore) => {
    dispatch({
        type: LOADING_REMUNERACION
    });

    try {

        const store = getStore().usuarioReducer;

        const { token } = store;


        const request = await fetch(`${API}/Remuneracion`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "token": token
            },
        });

        const { remuneraciones } = await request.json();

        dispatch({
            type: TREAER_TODOS,
            payload: remuneraciones
        });
    } catch (error) {
        dispatch({
            type: ERROR_REMUNERACION,
            payload: error
        })
    }
};