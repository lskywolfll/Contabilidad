import { GET_POST } from '../types';

export const fetchPost = () => async dispatch => {
    // example consult api
    // const res  = axios.get('api/post')
    dispatch({
        type: GET_POST,
        payload: ['1st post', '2nd post']
    })
}