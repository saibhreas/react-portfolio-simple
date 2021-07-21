import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
//import Resume from '../pages/Resume';
import Contact from './pages/Contact';
import Work from './pages/Work';
import '../App.css'

export default function Project() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Work />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}