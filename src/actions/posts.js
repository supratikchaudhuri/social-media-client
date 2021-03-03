import * as api from "../api";
import {CREATE, DELETE, FETCH_ALL, UPDATE, LIKE} from "../constants/actionTypes.js"

//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data})
        
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        console.log(data);
        dispatch({type: CREATE, payload: data})
    } 
    catch (error) {
        console.log(error.meassage);
    }
}

export const updatePost = (id, updatedPost) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, updatedPost)
        // console.log(data);
        dispatch({type: UPDATE, payload: data})
    } 
    catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } 
    catch (e) {
        console.log(e);
    }
}

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    
    try {
        const {data} = await api.likePost(id, user?.token);
        dispatch({type: LIKE, payload: data})
    } 
    catch (error) {
        console.log(error);
    }
}