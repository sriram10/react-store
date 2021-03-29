import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PageTitle from './PageTitle';

const Layout = ({ title, children }) => {
  return (
    <div>
      <PageTitle name={title} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;