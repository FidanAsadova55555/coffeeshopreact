import React from 'react'
import { Outlet } from 'react-router';
import Footer from './footer';
import Header from './header';
import DynamicTitle from '../components/dynamic';

const Layout = () => {
    return (
      <div>  
          <DynamicTitle />
<Header/>
      <main> <Outlet /></main>
        <Footer/>
      </div>
    );
}

export default Layout