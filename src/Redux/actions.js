import { ROOT_URL, API_KEY, CREATE_POST, REQUEST_POSTS, REQUEST_POST, DELETE_POST } from "./Constants";
import axios from 'axios'

export const fetchPosts = () => (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(data => dispatch({ 
            type: REQUEST_POSTS,
            payload: data.data
        }))
        
}

export const createPost = (values, callback) => (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(data => {
            callback();
            return(
                dispatch({ 
                    type: CREATE_POST,
                    payload: data.data
                })
            )
            
        })
}

export const fetchPost = (id) => (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(data => {
            dispatch({ type: REQUEST_POST, payload: data.data })
        })
}

export const deletePost = (id, callback) => (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(data => {
            callback();
            return dispatch({ type: DELETE_POST, payload: data })
        });
    
}