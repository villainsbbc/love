import React from 'react';
import Header from './commons/Header';
import Footer from './commons/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;