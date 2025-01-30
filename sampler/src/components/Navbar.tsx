import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Search, Music2, Heart, Download, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', icon: Home, path: '/' },
    { name: 'EXPLORE', icon: Search, path: '/explore' },
    { name: 'SAMPLES', icon: Music2, path: '/samples' },
    { name: 'FAVORITES', icon: Heart, path: '/favorites' },
    { name: 'DOWNLOADS', icon: Download, path: '/downloads' },
    { name: 'SETTINGS', icon: Settings, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-zinc-800 border border-amber-500/20 text-amber-500 md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-zinc-900 justify-center border-r border-amber-500/20 transform transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* Logo Section */}
        <div className="p-6 border-b border-amber-500/20">
          <h1 className="text-3xl font-bold font-mono text-amber-500">SAMPLER</h1>
          <p className="text-xs text-amber-200/60 font-mono mt-1">FREE SAMPLES FOR YOUR NEXT HIT</p>
        </div>

        {/* Navigation Links */}
        <div className="py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-6 py-3 text-amber-200/60 hover:text-amber-500 hover:bg-amber-500/10 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-4 group-hover:text-amber-500" />
              <span className="font-mono text-sm">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-500/20">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-amber-200/60">ONLINE</span>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;