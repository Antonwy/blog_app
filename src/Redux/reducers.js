import { REQUEST_POSTS, REQUEST_POST } from "./Constants";

const initialState = {
    posts: [],
}

export const requestPosts = (state=initialState, action={}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return Object.assign({}, state, { posts: action.payload });
        case REQUEST_POST:
            return Object.assign({}, state, { post: action.payload });
        default:
            return state;
    }
}