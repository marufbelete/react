import styled from 'styled-components';

export const PostsPageHeader = styled.div`
    text-align : center;
    color : white;
    font-size : 50px;
    font-weight : bold;
    margin-top : 55px;
`;

export const AddButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const AddPostButton = styled.button`
    width: 300px;
    height: 60px;
    background-color: red;
    color: white;
    font-size: 25px;
    border: none;
    border-radius: 15px;
`;

export const PostsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 100px;
`

export const PostWrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 300px;
    height: 300px;
    margin: 10px;
`;

export const PostImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`;

export const PostTitle = styled.div`
   font-size : 20;
   font-style : italic;
`;

export const PostPrice = styled.div`
   font-size : 15;
   font-weight: bold;
`;

export const PostBuyButton = styled.button`
    width: 50%;
    height: 50px;
    background: pink;
`;

export const AddPostPageWrapper = styled.div`
    width: 50%;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AddPostHeader = styled.div`
    font-size : 35px;
    color: white;
    font-style: italic;
    text-align: center;
    margin-block: 25px;
`;