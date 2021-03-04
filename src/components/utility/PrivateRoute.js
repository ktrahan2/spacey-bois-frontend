import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//something is breaking in here when i try to login it throws the 
// order of things loading to not catch the user.
const PrivateRoute = ({component, path}) => {

    const token = localStorage.getItem("token")

    return (
        <>
            { token ? 
            <Route path={path} component={component}/>
            : <Redirect to="/"/>
            }
        </>
    );
};

export default PrivateRoute;