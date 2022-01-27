import PostState from '../widgets/Post';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/action-creators/posts';

import { PostsPageHeader, PostsWrapper, AddPostButton, AddButtonWrapper } 
from '../styled-components/PostsPageStyledComponents';
import Post from '../widgets/Post';

const PostsPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts);
    const { auth } = useSelector((state: any) => state.auth);

    let token = localStorage.getItem("token");
    let decoded : any = jwt_decode(token!);
    
    useEffect(() => {
        dispatch(
            fetchPosts(auth)
        );  
    }, [auth])
        
    const handleAddClick = () => {
        history.push('/addPosts');
    };

    return <>
        <PostsPageHeader>List of Posts</PostsPageHeader>
        
        {
            decoded.username === "admin" && 
            <AddButtonWrapper>
                <AddPostButton onClick={ handleAddClick }>Add Post</AddPostButton>
            </AddButtonWrapper>
        }

        { posts != null && 
            <PostsWrapper>
            {
                posts.posts.map((p: { Price: number; ItemName: string; }) => <Post
                    imageUrl='https://images.unsplash.com/photo-1643223424664-f27ae3ea2c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    price={p.Price}
                    title= {p.ItemName}
                    onBuyButtonClicked={() => console.log("Value")}
                />)
            }
            </PostsWrapper>
        }
    </>
};

export default PostsPage;
