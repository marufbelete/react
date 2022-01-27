import { PostWrapper, PostImage ,PostTitle ,PostPrice, PostBuyButton } 
from '../styled-components/PostsPageStyledComponents';

interface PostProps {
    title : string,
    price : number,
    imageUrl : string,
    onBuyButtonClicked : (value : string) => void
}

const Post = (props : PostProps) => {
  return <PostWrapper>
      <PostImage src={props.imageUrl}/>
      <PostTitle>{props.title}</PostTitle>
      <PostPrice>{"Price " + props.price}</PostPrice>
      <PostBuyButton onClick={() => props.onBuyButtonClicked("VALUE")}>Buy</PostBuyButton>
  </PostWrapper>;
};

export default Post;
