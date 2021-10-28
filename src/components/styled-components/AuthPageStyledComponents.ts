import styled from 'styled-components';

export const AuthPageLabel = styled.div`
    color : white;
    font-size : 35px;
    font-weight : bold;
    margin-left : 150px;
    margin-top : 25px;
`;

export const IntroText = styled.div`
    margin : 30px 50px;
    color : lightgray;
    font-size : 58px;
    text-align : center;
`;

export const InputLabel = styled.label`
    text-align : left;
    color : lightgray;
    font-size : 18px;
`;

export const TextInput = styled.input`
    width : 100%;
    height : 50px;
    text-align : center;
    font-size : 17px;
    background-color : #161515;
    border-radius : 15px;
    color : lightgray;
    outline: none;
    border : 2px solid #161515;
    transition : all 0.5s ease;
    margin : 0 auto;

    &:focus{
        border : 2px solid #BC1BC5;
    }
`;

export const TextInputError = styled.div`
    text-align : center;
    color : #ac0a0a;
    font-size : 15px;
    width : 100%;
`;


export const InputComponentsWrapper = styled.div`
    width : 100%;
    height : 100px;
    display : flex;
    flex-direction : column;
    align-items : left;
    justify-content : space-between;
    margin : 0 auto;
`;


export const AuthButton = styled.button`
    width : 220px;
    height : 50px;
    font-size : 18px;
    background : #BC1BC5;
    color : white;
    border : none;
    border-radius : 10px;
    transition : all 0.5s ease;

    &: hover {
        background : #89118f;
    }
`;


interface FormElementProps {
    isSignUp : boolean
}

export const FormElement = styled.form<FormElementProps>`
    width : 30%;
    height : ${ props => props.isSignUp ? '450px' : '300px'};
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    margin : 70px auto;
`;

export const SwitchTextOne = styled.span`
    font-size : 22px;
    color : white;
    text-align : center;
`;

export const SwitchTextTwo = styled.span`
    font-size : 22px;
    color : #BC1BC5;
    text-align : center;
    margin-left : 10px;
`;

export const SwitchTextWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
`;

export const AuthError = styled.div`
    text-align : center;
    font-size : 15px;
    margin-bottom : 25px;
    color : red;
`;