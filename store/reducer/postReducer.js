import { GET_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}