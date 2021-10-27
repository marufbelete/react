import { AuthButton, FormElement } from '../styled-components/AuthPageStyledComponents';
import Input from './Input';


interface FormProps {
    isSignUp : boolean,
    onSubmit : () => void
}

const Form = ( props : FormProps ) => {

    return (
        <FormElement isSignUp = { false } onSubmit = { () => props.onSubmit }>
            <Input 
                labelText="Email*" 
                placeholder = "Enter Your Email" 
                error = "Bad Email" 
                type="email"
            />

           <Input 
                labelText="Password*" 
                placeholder = "Enter Your Password" 
                error = "" 
                type="password"
            />

            {
                props.isSignUp && 
                <Input 
                    labelText="Password-Repeat*" 
                    placeholder = "Repeat Your Password" 
                    error = "" 
                    type="password"
                />  
            }
            

            <AuthButton>
                { props.isSignUp ? "Sign Up" : "Sign In" }
            </AuthButton>


        </FormElement>
    )
}


export default Form;
