import styled from 'styled-components';

export const MainPageHeader = styled.div`
    text-align : center;
    color : white;
    font-size : 50px;
    font-weight : bold;
    margin-top : 55px;
`;

export const MainPageContent = styled.div`
    width : 450px;
    height : 450px;
    background : #161515;
    margin : 50px auto;
    border-radius : 50px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;
`;

export const MainPageDescription = styled.div`
    width : 80%;
    line-height : 50px;
    color : lightgray;
    font-size : 20px;
`;


export const LogOutButton = styled.button`
  width: 25%;
  margin: 0 auto;
  height: 50px;
  font-size: 23px;
  background: #bc1bc5;
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;

  &: hover {
    background: #89118f;
  }
`;