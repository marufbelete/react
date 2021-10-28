import { useState } from 'react';
import { AuthButton, FormElement, SwitchTextOne } from '../styled-components/AuthPageStyledComponents';
import Input from './Input';


export interface UserInputValues {
    email : string,
    password : string,
    passwordRepeat? : string
}

interface FormProps {
    isSignUp : boolean,
    onSubmit : (e : React.FormEvent<HTMLFormElement> , values : UserInputValues ) => void,
    loading : boolean
}

const Form = ( props : FormProps ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");


    const values = {
        email, password, passwordRepeat
    }

    return (
        <FormElement isSignUp = { props.isSignUp } onSubmit = { (e) => props.onSubmit(e,values) }>
            <Input 
                labelText="Email*" 
                placeholder = "Enter Your Email" 
                error = "Bad Email" 
                type="email"
                onInputChange = { (value) => setEmail(value) }
            />

           <Input 
                labelText="Password*" 
                placeholder = "Enter Your Password" 
                error = "" 
                type="password"
                onInputChange = { (value) => setPassword(value) }
            />

            {
                props.isSignUp && 
                <Input 
                    labelText="Password-Repeat*" 
                    placeholder = "Repeat Your Password" 
                    error = "" 
                    type="password"
                    onInputChange = { (value) => setPasswordRepeat(value) }
                />  
            }
            
            {
                props.loading ? <SwitchTextOne>I AM AJDA</SwitchTextOne> :

                <AuthButton>
                    { props.isSignUp ? "Sign Up" : "Sign In" }
                </AuthButton>
            }

            


        </FormElement>
    )
}


export default Form;
