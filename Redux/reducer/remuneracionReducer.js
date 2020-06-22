import { ERROR_REMUNERACION, LOADING_REMUNERACION, TREAER_TODOS } from '../types/remuneracionTypes';

const initialState = {
    loading: false,
    error: null,
    remuneraciones: [],
}

export const remuneracionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TREAER_TODOS:
            return {
                ...state,
                remuneraciones: payload,
                loading: false
            }
        case LOADING_REMUNERACION:
            return {
                ...state,
                loading: true
            }
        case ERROR_REMUNERACION:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
};