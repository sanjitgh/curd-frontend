import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    );
};

export default MainLayout;