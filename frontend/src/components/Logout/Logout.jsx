import React, {useEffect} from 'react';
import Auth from "../../auth";
import {useHistory} from 'react-router-dom'

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        Auth.logout(() => {
            localStorage.clear();
            history.push('/login');
        })
    }, [history])

    return (
        <>

        </>
    );
};

export default Logout;
