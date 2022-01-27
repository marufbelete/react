import { useState } from 'react';
import { AuthButton, FormElement, SwitchTextOne } from '../styled-components/AuthPageStyledComponents';
import Input from './Input';


export interface UserInputValues {
    username : string,
    password : string,
    passwordRepeat? : string,
    name: string
}

interface LoginFormProps {
    isSignUp : boolean,
    onSubmit : (e : React.FormEvent<HTMLFormElement> , values : UserInputValues ) => void,
    loading : boolean
}

const LoginForm = ( props : LoginFormProps ) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [name, setName] = useState("");


    const values = {
        username, password, name, passwordRepeat,
    }

    return (
        <FormElement isSignUp = { props.isSignUp } onSubmit = { (e) => props.onSubmit(e,values) }>
            
            {
                props.isSignUp && 
                <Input 
                    labelText="Name*" 
                    placeholder = "Enter Your Name" 
                    error = "" 
                    type="text"
                    onInputChange = { (value) => setName(value) }
                />  
            }
            
            <Input 
                labelText="Username*" 
                placeholder = "Enter Your Username" 
                error = "" 
                type="text"
                onInputChange = { (value) => setUsername(value) }
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
                props.loading ? <SwitchTextOne>Loading ..... </SwitchTextOne> :

                <AuthButton>
                    { props.isSignUp ? "Sign Up" : "Sign In" }
                </AuthButton>
            }

            


        </FormElement>
    )
}


export default LoginForm;
