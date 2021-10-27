import { Fragment } from "react"
import { AuthPageLabel, IntroText } from '../styled-components/AuthPageStyledComponents';

interface AuthPageHeaderProps {
    isSignUp : boolean
}

const AuthPageHeader = ({ isSignUp } : AuthPageHeaderProps) => {
    return (
        <Fragment>
            <AuthPageLabel>{ isSignUp ? "Sign Up" : "Sign In"}</AuthPageLabel>
            <IntroText>
                { isSignUp ? "Welcome To The Sign Up Page" : "Welcome To The Sign In Page"}
            </IntroText>
        </Fragment>
    )
}

export default AuthPageHeader;
