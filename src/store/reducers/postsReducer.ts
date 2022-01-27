import { PostTypes } from '../action-types/postTypes';


interface State {
    posts : Post[]
}

interface Post {
    _id: string,
    Price: number,
    ItemName: string
}

const initialState = {
    posts: []
}


const postsReducer = (state : State = initialState , action: any ) => {    
    switch(action.type){
        case PostTypes.FETCH_POSTS_LOADING:
            return { 
                posts: [],
                loading: true,
                error: null
            };
        case PostTypes.FETCH_POSTS_SUCCESS:
            return { 
                posts: [ ... action.payload],
                loading: false,
                error: null
            };
        case PostTypes.FETCH_POSTS_ERROR:
            return { 
                posts: [],
                loading: false,
                error: action.payload
            };
        case PostTypes.ADD_POST_LOADING:
            return { 
                posts: [ ...state.posts],
                loading: true,
                error: null
            };
        case PostTypes.ADD_POST_SUCCESS:
            return { 
                posts: [ ...state.posts, action.payload],
                loading: false,
                error: null
            };
        case PostTypes.ADD_POST_ERROR:
            return { 
                posts: [ ...state.posts],
                loading: false,
                error: action.payload
            };

        default : 
            return state;
    }

}; 

export default postsReducer;