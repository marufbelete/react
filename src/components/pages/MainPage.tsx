import { Fragment } from 'react'
import {
  MainPageHeader,
  MainPageContent,
  MainPageDescription,
  LogOutButton
} from "../styled-components/MainPageStyledComponents";

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MainPage = () => {

    const history = useHistory();
    const { auth } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if(auth == null){
            history.push('/');
        }
    }, auth)


    return (
        <Fragment>
            <MainPageHeader>Welcome To The Main Page Dawgg</MainPageHeader>
            <MainPageContent>
                <MainPageDescription>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis rutrum lectus rutrum 
                    nulla fringilla ullamcorper. Proin in est metus. 
                    Morbi porta eros malesuada risus eleifend, id feugiat 
                </MainPageDescription>
                <LogOutButton>Log Out</LogOutButton>
            </MainPageContent>
        </Fragment>
    )
};

export default MainPage;
