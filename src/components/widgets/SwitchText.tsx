import React from 'react';
import { SwitchTextWrapper, SwitchTextOne , SwitchTextTwo } from '../styled-components/AuthPageStyledComponents';


interface SwitchTextProps {
    isSignUp : boolean,
    onClick : () => void
}


const SwitchText = ({ isSignUp, onClick } : SwitchTextProps) => {
    return (
        <SwitchTextWrapper onClick = { onClick }>
            <SwitchTextOne>{ isSignUp ? "Already Have An Account ? " : "Don't Have An Account ? "}</SwitchTextOne>
            <SwitchTextTwo>{ isSignUp ? "Sign In" : "Sign Up"}</SwitchTextTwo>
        </SwitchTextWrapper>
    ) 
};

export default SwitchText;