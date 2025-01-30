import React from 'react';
import Navbar from './components/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <main className="md:ml-64 min-h-screen transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;