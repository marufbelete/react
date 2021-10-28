import React, { Fragment } from 'react'
import {
  MainPageHeader,
  MainPageContent,
  MainPageDescription,
  LogOutButton
} from "../styled-components/MainPageStyledComponents";

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = () => {

    const history = useHistory();
    const { error, loading, auth } = useSelector((state: any) => state.auth);
    const authPageState = useSelector((state: any) => state.authPageState);


    // if(auth == null){
    //     history.push('/');
    // }


    console.log("MAIN PAGE" + authPageState.isSignUp);
    

    return (
        <Fragment>
            <MainPageHeader>Welcome To The Main Page Dawgg</MainPageHeader>
            <MainPageContent>
                <MainPageDescription>
                    Lorem ipusm adnajd bhdbah hbdhab bdhabd hb hdbha bbdhabd hb adbahdb  bdhabdah b abd had
                    nahom habtany dbvgjilkij jmoiuijm erwrtqr mkdaowo
                </MainPageDescription>
                <LogOutButton>Log Out</LogOutButton>
            </MainPageContent>
        </Fragment>
    )
};

export default MainPage;
