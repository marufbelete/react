import { Dispatch } from 'react';
import axios, { HeadersDefaults } from 'axios';
import { PostTypes } from "../action-types/postTypes";


interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
}
 
const token = localStorage.getItem("token");

axios.defaults.headers = {
    Authorization: `Bearer ${token}`
} as CommonHeaderProperties;

export const fetchPosts = (token : string) => {
    return async (dispatch : Dispatch<any>) => {

        dispatch( fetchPostLoading() )
        try {
            const response = await axios.get(
                'http://localhost:5000/getallitems' 
            );            
            dispatch( fetchPostSuccess(response.data) );
        } 
        catch (error : any) {
            dispatch( fetchPostsError(error.message) );
        }
    }
}

export const fetchPostLoading = () => {
    return {
        type : PostTypes.FETCH_POSTS_LOADING
    }
}

export const fetchPostSuccess = (postList : any) => {
    return {
        type : PostTypes.FETCH_POSTS_SUCCESS,
        payload: postList
    }
}

export const fetchPostsError = (error : string) => {
    return {
        type : PostTypes.FETCH_POSTS_ERROR,
        payload: error
    }
}

export const addPost = (itemName: string, itemPrice: string) => {
    return async (dispatch : Dispatch<any>) => {
        dispatch( addPostLoading() )
        try {
            await axios.post(
                'http://localhost:5000/additem',
                { itemname : itemName, price : itemPrice} 
            );            
            dispatch( addPostSuccess(itemName, itemPrice, "Some Id") );
        } 
        catch (error : any) {
            dispatch( addPostError(error.message) );
        }
    }
}

export const addPostLoading = () => {
    return {
        type : PostTypes.ADD_POST_LOADING,
    }
}


export const addPostSuccess = (itemName : string, itemPrice : string, itemId : string) => {
    return {
        type : PostTypes.ADD_POST_SUCCESS,
        payload : {
            ItemName: itemName , Price: itemPrice, _id: itemId
        }
    }
}


export const addPostError = (error : string) => {
    return {
        type : PostTypes.ADD_POST_ERROR,
        payload: error
    }
}

