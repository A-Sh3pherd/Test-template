import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import {withRouter} from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Sidebar />
            <h1 className='d-flex justify-content-center'>Hello Home page!</h1>
        </>
    );
};

export default withRouter(Home);
