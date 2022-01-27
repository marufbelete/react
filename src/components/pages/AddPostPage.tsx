import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/action-creators/posts';
import { AuthButton } from '../styled-components/AuthPageStyledComponents';
import { AddPostPageWrapper, AddPostHeader } from '../styled-components/PostsPageStyledComponents';
import Input from '../widgets/Input';

const AddPostPage = () => {

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("0");
  const dispatch = useDispatch();


  const handleAddPostClicked = async () =>  {
    console.log(itemName + "  " + itemPrice);
    await dispatch(addPost(itemName,itemPrice));
  }

  return <>
    <AddPostPageWrapper>

      <AddPostHeader>Add Posts Here</AddPostHeader>
      <Input 
            labelText="Item Name*" 
            placeholder = "Enter Item Name" 
            error = "" 
            type="text"
            onInputChange = { (value) => setItemName(value) }
        />  

        <Input 
            labelText="Item Price*" 
            placeholder = "Enter Item Price" 
            error = "" 
            type="text"
            onInputChange = { (value) => setItemPrice(value) }
        /> 
        
        <AuthButton onClick={ handleAddPostClicked}>
          Add Post
        </AuthButton>
    </AddPostPageWrapper>
  </>;
};

export default AddPostPage;
